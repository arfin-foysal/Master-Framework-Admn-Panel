import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { permissionApiContext } from '../../contexts/api/PermissionApi';
import PamissionEditAndUpdate from './PermissionEditAndUpdate';
const PermissionAllListTable = ({ item }) => {
  const {permissionDelete}=useContext(permissionApiContext);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handelDelete = (id) => {
    permissionDelete(id);

  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title>Edit Permassion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PamissionEditAndUpdate data={data} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
      <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.perm_name}</td>
          <td>{item.perm_description}</td>
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

export default PermissionAllListTable;
