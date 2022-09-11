import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { roleApiContext } from '../../contexts/api/RoleApi';
import { userApiContext } from '../../contexts/api/UserApi';

const UserEditAndUpdate = ({ data }) => {
  const { createRole, roleList, roleListAllData } = useContext(roleApiContext);
  
    const id = data.id;

    const {userUpdate}=useContext(userApiContext);


  const [allData, setData] = useState({
    fullname: data.fullname,
    email: data.email,
    phone: data.phone,
    password: data.password,
    role_id: data.Role.id,
  });

 

  const handleChange = (e) =>
    setData({ ...allData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await userUpdate(allData,id);
 
    // after submit allData
    setData({
      fullname: '',
      email: '',
      phone: '',
      password: '',
      role_id: '',
    });
  }

  return (
    <>
    <Col sm={12}>
        <Card>
          {/* <Card.Header>
  
          </Card.Header> */}
          <Card.Body>
            <Row>
              <Col >
                <Form onSubmit={handleSubmit}>
                  <Form.Group >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="fullname" required
                      value={allData.fullname} onChange={handleChange} />
                    
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" required
                      value={allData.email} onChange={handleChange} />
                
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone" name="phone" required 
                      value={allData.phone} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password" required
                      value={allData.password} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Add Role</Form.Label>
                    <Form.Control as="select" name="role_id"
                      value={allData.role_id}
                      onChange={handleChange}
                    >
                      <option disabled>{data.Role.role_name}</option>
                      {roleListAllData.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.role_name}
                        </option> 
                  ))}
                    </Form.Control>
                  </Form.Group>
                  <div className="pt-2">
                    <Button type="submit" variant="primary">
                    Update User
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
          </>
  )
}

  export default UserEditAndUpdate;