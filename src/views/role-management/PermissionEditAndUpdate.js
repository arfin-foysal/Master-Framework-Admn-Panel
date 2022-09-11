import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { permissionApiContext } from '../../contexts/api/PermissionApi';

const PermissionEditAndUpdate = ({ data }) => {
    
    const id = data.id;

    const {createPermission,resData,permissionList,permissionListAllData,permissionUpdate}=useContext(permissionApiContext);


  const [allData, setData] = useState({
    perm_name: data.perm_name,
    perm_description: data.perm_description,
  });

  

  const handleChange = (e) =>
    setData({ ...allData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await permissionUpdate(allData,id);
 
    // after submit allData
    setData({
      perm_name: '',
      perm_description: '',
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
                <Form.Label>Permission Name</Form.Label>
                    <Form.Control type="text" placeholder="Permission Name"
                      name="perm_name"
                      value={allData.perm_name }
                      onChange={handleChange}
                      required />
              </Form.Group>
            
              <Form.Group >
                <Form.Label>Permission Description</Form.Label>
                    <Form.Control as="textarea" rows="3"
                      name="perm_description"
                      value={allData.perm_description}
                      onChange={handleChange}
                    />
              </Form.Group>
              <div className='pt-2'>
              <Button type='submit'  variant="primary">Update Permission</Button>
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

export default PermissionEditAndUpdate