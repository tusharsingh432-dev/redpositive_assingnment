import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/people/get');
        // console.log(response.data);  
        setUserData(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);


  //////////////input modal////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddUser = async () => {
    const user = {
      name,
      email,
      phone,
      hobbies
    }
    try {
      const response = await axios.post('/api/people/add', user);
      window.location.reload();
    } catch (err) {
      alert('Something went wrong');
      console.log(err);
    }
    setShow(false);
  }
  /////////////input////////////////
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hobbies, setHobbies] = useState('');


  ////////////////Send mail////////////////
  const [selectedRows, setSelectedRows] = useState([]);
  const handleCheck = (id) => {
    let newSelectedRows = selectedRows;
    if (selectedRows.includes(id)) {
      newSelectedRows = newSelectedRows.filter(e => e !== id);
    } else {
      newSelectedRows.push(id);
    }
    setSelectedRows(newSelectedRows);
  }
  const handleSend = async () => {
    console.log(selectedRows);
    await axios.post('/api/mail', selectedRows);
  }


  return (
    <div className="App container">
      <h1 style={{ margin: '10px', "textAlign": "center" }}>DataSet</h1>

      <div className="row">
        {
          loading
            ? <h1>loading</h1>
            : <table className="table table-hover">
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
                {userData.map(cur => {
                  return <tr key={cur.uid}>
                    <th scope="row"><input type="checkbox" onChange={() => { handleCheck(cur.uid) }} /></th>
                    <td>{cur.uid}</td>
                    <td>{cur.name}</td>
                    <td>{cur.phone}</td>
                    <td>{cur.email}</td>
                    <td>{cur.hobbies}</td>
                    <td><i className="fa-light fa-pen-to-square"></i></td>
                  </tr>
                })}
              </tbody>
            </table>
        }
      </div>
      <div className="row" style={{ "display": "flex", justifyContent: 'space-around' }}>
        <button type='button' className='btn btn-primary col-md-4' onClick={handleShow}>Add</button>
        <button type='button' className='btn btn-primary col-md-4' onClick={handleSend}>Send</button>
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
          <Button variant="primary" onClick={handleAddUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
