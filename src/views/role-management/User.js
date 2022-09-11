
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { roleApiContext } from '../../contexts/api/RoleApi';
import { userApiContext } from '../../contexts/api/UserApi';
import UserAllListTable from './UserAllListTable';

const User = () => {

  const { createUser, userList, userListAllData } = useContext(userApiContext);

  const {roleList,roleListAllData}=useContext(roleApiContext);

  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    role_id: '',
  });



  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(data);

    // after submit data
    setData({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    role_id: '',

    });

    // history.push("/");
  };


  useEffect(() => {
    userList()
    roleList();
  }, []);

  

  return (
    <>
      <Col sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Create New User</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="fullname" required
                      value={data.fullname} onChange={handleChange} />
                    
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" required
                      value={data.email} onChange={handleChange} />
                
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone" name="phone" required 
                      value={data.phone} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="password" required
                      value={data.password} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Add Role</Form.Label>
                    <Form.Control as="select" name="role_id"
                      value={data.role_id}
                      onChange={handleChange}
                    >
                      <option>Default select</option>
                      {roleListAllData.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.role_name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <div className="pt-2">
                    <Button type="submit" variant="primary">
                     Add User
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
            <Card.Title as="h5">User List</Card.Title>
          </Card.Header>
          <Card.Body className=" table-responsive ">
            <Table responsive hover className="table-scroll table-earnings ps-5 ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Phone</th>
                  <th>User Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              {userListAllData.map((item) => (
                <UserAllListTable key={item.id} item={item}/>
              )
              )}
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
