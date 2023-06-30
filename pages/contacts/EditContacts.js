import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditUser = ({ user, updateUser, onCancelEdit }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: user.id,
      name,
      email,
      mobile
    };
    updateUser(updatedUser);
  };

  return (
    <Modal show={true} onHide={onCancelEdit} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>Mobile:</Form.Label>
            <Form.Control type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Update
          </Button>
          <Button variant="secondary" onClick={onCancelEdit}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUser;
