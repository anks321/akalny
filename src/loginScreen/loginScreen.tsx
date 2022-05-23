import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import './loginScreen.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    useNavigate 
  } from "react-router-dom";
  

  
function Login() {
    return <div className='login'>
        <Container className='h-100 d-flex justify-content-center align-content-center'>
            <Row className=''>
                <Col className='h-100 d-flex flex-column justify-content-center'>
                    <LoginBox></LoginBox>           
                </Col>
            </Row>
        </Container>
    </div>
}

function LoginBox() {
    //hooks
    const [name, setName] = useState("");
    function canPass():boolean{        
        if(name)
            return true
        else
            return false;
    }    
    const navigate = useNavigate();

    //methods
    function onCreateOrder(){navigate('/createOrder')}
    function onJoinOrder(){navigate('/joinOrder')}


    //UI
    return (  
        <div className='loginBox'>
            <h1 className='text-center'>عايز أكُل</h1>
            <hr />
            <Form.Label>Your name </Form.Label>
            <Form.Control type="text" placeholder="hamdy el sokra" onChange={event=>setName(event.target.value)}/>
            <hr />
            <div className='text-center d-flex justify-content-center'>
                <Button variant="primary" className='text-center' onClick={onJoinOrder} disabled={!canPass()}>Join order</Button>
                <div style={{width:'20px'}}></div>
                <Button variant="primary" className='text-center' onClick={onCreateOrder}  disabled={!canPass()}>Create new order</Button>
            </div>
        </div>
    );
}


export default Login;