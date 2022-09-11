import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

import { roleApiContext } from '../../contexts/api/RoleApi';

const RoleEditAndUpdate = ({ data }) => {
    
    const id = data.id;

    const {roleUpdate}=useContext(roleApiContext);


  const [allData, setData] = useState({
    role_name: data.role_name,
    role_description: data.role_description,
  });

  

  const handleChange = (e) =>
    setData({...allData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await roleUpdate(allData,id);
 
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
        {/* <Card.Header>
          <Card.Title as="h5">Create New Permission</Card.Title>
        </Card.Header> */}
        <Card.Body>
          <Row>
          <Col md={12} >
            <Form onSubmit={handleSubmit}>
              <Form.Group >
                <Form.Label>Role Name</Form.Label>
                    <Form.Control type="text" placeholder="Role Name"
                      name="role_name"
                      value={allData.role_name }
                      onChange={handleChange}
                      required />
              </Form.Group>
            
              <Form.Group >
                <Form.Label>Role Description</Form.Label>
                    <Form.Control as="textarea" rows="3"
                      name="role_description"
                      value={allData.role_description}
                      onChange={handleChange}
                    />
              </Form.Group>
              <div className='pt-2'>
              <Button type='submit'  variant="primary">Update Role</Button>
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

export default RoleEditAndUpdate;