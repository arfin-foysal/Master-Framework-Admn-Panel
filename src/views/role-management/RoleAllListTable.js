import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { roleApiContext } from '../../contexts/api/RoleApi';
import RoleEditAndUpdate from './RoleEditAndUpdate';
const RoleAllListTable = ({ item }) => {
  const {roleDelete}=useContext(roleApiContext);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handelDelete = (id) => {
    roleDelete(id);

  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RoleEditAndUpdate data={data} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
      <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.role_name}</td>
          <td>{item.role_description}</td>
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

export default RoleAllListTable;
