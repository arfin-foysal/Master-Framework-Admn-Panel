import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'
import { roleApiContext } from '../../contexts/api/RoleApi';
import RoleAllListTable from './RoleAllListTable';



const Role = () => {
  const {createRole,roleList,roleListAllData}=useContext(roleApiContext);

  const [allData, setData] = useState({
    role_name: '',
    role_description: '',
  });

  useEffect(() => {
    roleList();
  }, []);

  const handleChange = (e) =>
    setData({ ...allData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRole(allData);
  
    // after submit allData
    setData({
      role_name: '',
      role_description: '',
    });


  }

  return (
    <>
        <Col sm={12} >
          <Card >
            <Card.Header>
              <Card.Title as="h5">Create New Role</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
              <Col md={6} >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Role Name</Form.Label>
                    <Form.Control type="text" placeholder="Role Name" required
                      name="role_name"
                      value={allData.role_name}
                      onChange={handleChange} 
                    />
                  </Form.Group>
                
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Role Description</Form.Label>
                    <Form.Control as="textarea" rows="3"
                      name="role_description"
                      value={allData.role_description}
                      onChange={handleChange}

                    />
                  </Form.Group>
                  <div className='pt-2'>
                  <Button type='submit'  variant="primary">Add Role</Button>
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
            <Card.Title as="h5">Role List</Card.Title>
          </Card.Header>
          <Card.Body className=" table-responsive ">
            <Table responsive hover className="table-scroll table-earnings ps-5 ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role Name</th>
                  <th>Role Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              {roleListAllData.map((item) => (
                <RoleAllListTable key={item.id} item={item}  />
              ))}
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Role