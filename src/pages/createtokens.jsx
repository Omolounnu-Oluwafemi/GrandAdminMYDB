import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./createtokens.scss"
import Ourlogo from "../assets/gibmpcsl.png"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContactPageIcon from '@mui/icons-material/ContactPage';
 import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


const CreateToken = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [err, setError] = useState(null);
  
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const {currentUser } = useContext(AuthContext);


  const handleChange = (event) => {
    setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const formSubmit = (e) =>{
    const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true);
    }
  
    const handleSubmit = async (event) => {
       event.preventDefault();
  
      try {
        await axios.post("/superAdmin/createToken", inputs);
        
      } catch (err) {
        setError(err.response.data);
        //console.log(err)
      }
      navigate("/tokenSuccess");
    };

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  return (
    <div className="admin_createToken">
      <div className="left">
      <div className="top">
        <span>
        <img className="logo"  src={Ourlogo} alt="GIB HORIZONS"/> 
        </span> 
    </div>
    <hr />
    <div className="center">
    <ul>
            <li>
                <Link  className="link" to="/home">
                <DashboardIcon className="icon"/>
                <span>My Dashboard</span>
                </Link>
            </li>
            <li>
                <Link  className="link" to="/createtoken">
                <DashboardIcon className="icon"/>
                <span>Create Token</span>
                </Link>
            </li>
            <li>
                <Link className="link" to="/users">
                <ContactPageIcon className="icon"/>
                <span>View Users</span> 
                </Link>
            </li>
            <li>
            <Link className="link" to="/messages">
            <QuestionAnswerIcon className="icon"/>
                <span>View Messages</span>
                </Link>
            </li>
            <li>
            <Link className="link" to="/createadmin">
            <QuestionAnswerIcon className="icon"/>
                <span>Create Admin</span>
                </Link>
            </li>
        </ul>
        </div>
      </div>
      <div className="right">
        <nav className="nav">
        <p>{time[0] + ':' + time[1]} | {new Date().toLocaleDateString() + ''}</p>
        <p> Welcome,   {currentUser?.name}</p> 
        </nav>
        <div>
          <h5> CREATE NEW ACCESS TOKEN FOR A NEW MEMBER</h5>
        </div>
        <Form className="tokenform" noValidate onSubmit={handleSubmit} onClick={formSubmit} validated={validated} >
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className="formLabel" >First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"
             onChange={handleChange}
          />
            <Form.Control.Feedback type="invalid">
              Name field cannot be empty
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className="formLabel">Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastname"
           onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
              Name field cannot be empty
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCuustomEmail">
          <Form.Label className="formLabel">Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              name="email"
           onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input a correct email address
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomPhonenumber">
          <Form.Label className="formLabel">Phone Number</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="phone"
              placeholder="Phone Number"
              required
              name="phone"
          onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please add a phone number
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" >Submit</Button>
      {err && <p className="error">{err}</p>}
    </Form>
      </div>
    </div>
  )
}

export default CreateToken