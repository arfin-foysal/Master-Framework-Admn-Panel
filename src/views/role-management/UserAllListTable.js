import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { userApiContext } from '../../contexts/api/UserApi';
import UserEditAndUpdate from './UserEditAndUpdate';
const UserAllListTable = ({ item }) => {
  const {userDelete}=useContext(userApiContext);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handelDelete = (id) => {
    userDelete(id);
  };

  // console.log(item.Role?.role_name);


  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserEditAndUpdate data={data} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>

      <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.fullname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.Role?.role_name}</td>
         
          <td>
            <Button
              variant="primary"
              onClick={() => {
                setShow(true);
                setData(item);
              }}
            >
              Edit
            </Button>

            <Button variant="danger" onClick={()=>handelDelete(item.id)}>Delete</Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserAllListTable;
