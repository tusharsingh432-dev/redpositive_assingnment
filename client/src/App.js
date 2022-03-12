import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Form, Modal } from 'react-bootstrap';

function App() {


  useEffect(() => {
    async function fetchData(){
      
    }
  })


  //////////////input modal////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////input////////////////
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hobbies, setHobbies] = useState('');


  return (
    <div className="App container">
      <h1 style={{ margin: '10px', "textAlign": "center" }}>DataSet</h1>

      <div className="row">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phn No.</th>
              <th scope="col">Email</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><input type="checkbox" /></th>
              <td>1</td>
              <td>Tushar Singh</td>
              <td>7049088595</td>
              <td>tusharsingh432@gmail.com</td>
              <td>Reading</td>
              <td><i class="fa-light fa-pen-to-square"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div clasName="row" style={{ "display": "flex", justifyContent: 'space-around' }}>
        <button type='button' className='btn btn-primary col-md-4' onClick={handleShow}>Add</button>
        <button type='button' className='btn btn-primary col-md-4'>Send</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={(e) => { setName(e.target.value) }} />
            <input type="number" placeholder="Phone Number" className="form-control mb-2" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
            <input type="text" placeholder="Email" className="form-control mb-2" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" placeholder="Hobbies" className="form-control mb-2" value={hobbies} onChange={(e) => { setHobbies(e.target.value) }} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
