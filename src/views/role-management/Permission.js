import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { permissionApiContext } from '../../contexts/api/PermissionApi';
import PermissionAllListTable from './PermissionAllListTable';

const Permission = () => {
  const { createPermission, resData, permissionList, permissionListAllData, permissionUpdate } = useContext(permissionApiContext);

  const [allData, setData] = useState({
    perm_name: '',
    perm_description: ''
  });

  useEffect(() => {
    permissionList();
  }, []);

  const handleChange = (e) => setData({ ...allData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPermission(allData);
    permissionList();
    // after submit allData
    setData({
      perm_name: '',
      perm_description: ''
    });
  };
  return (
    <>
      <Col sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Create New Permission</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Permission Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Permission Name"
                      name="perm_name"
                      value={allData.perm_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Permission Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="perm_description" value={allData.perm_description} onChange={handleChange} />
                  </Form.Group>
                  <div className="pt-2">
                    <Button type="submit" variant="primary">
                      Add Permission
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Permission List</Card.Title>
          </Card.Header>
          <Card.Body className=" table-responsive ">
            <Table responsive hover className="table-scroll table-earnings ps-5 ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Permation Name</th>
                  <th>Permation Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              {permissionListAllData.map((item) => (
                <PermissionAllListTable key={item.id} item={item} permissionUpdate={permissionUpdate} permissionList={permissionList} />
              ))}
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Permission;
