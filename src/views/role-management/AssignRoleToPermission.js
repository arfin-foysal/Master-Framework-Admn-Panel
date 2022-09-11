import React, { useContext } from 'react';
import { useState,useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { permissionApiContext } from '../../contexts/api/PermissionApi';
import { roleApiContext } from '../../contexts/api/RoleApi';
import { roleToPermissionContext } from '../../contexts/api/RoleToPermissionApi';
const AssignRoletoPermission = () => {
  const { roleList, roleListAllData } = useContext(roleApiContext);
  const { permissionList, permissionListAllData } = useContext(permissionApiContext);
  const { roleToPermissinAssign } = useContext(roleToPermissionContext);
  const [click, setchacked] = useState();
  
  useEffect(() => {
    roleList();
    permissionList();
  }, []);

  const [allData, setData] = useState({
    role_id: '',
    perm_id: [],
  });


  const handleChange = (event) => {
    var permissions_array = [...allData.perm_id];
    if (event.target.checked) {
      permissions_array = [...allData.perm_id, event.target.value];
    } else {
      permissions_array.splice(allData.perm_id.indexOf(event.target.value), 1);
 
    }
    setData({ ...allData, perm_id: permissions_array });

  };

  const handelRoleId = (e) => {
    setData({ ...allData,[e.target.name]: e.target.value  });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await roleToPermissinAssign(allData);
    console.log(allData);
    e.target.reset();
  
    // after submit allData
    setData({
      role_id: '',
      perm_id: '',
    });
  }

  





  return (
    <>
      <Col sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Assign Role To Permission</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group >
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control as="select" name="role_id"
                      value={allData.role_id}
                      onChange={handelRoleId}
                    >
                      <option>Default select</option>
                      {roleListAllData.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.role_name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <hr />
                  <h6>Assign Permission</h6>
                  <hr />
                  <Form.Group>
                    {permissionListAllData.map((item) => (
                      <Form.Check type="checkbox" label={item.perm_name} key={item.id}
                        name={"perm_id"}
                        value={item.id}
                        onChange={handleChange}
                      />
                    ))}
                  </Form.Group>
                  <div className="pt-2">
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AssignRoletoPermission;
