import React from 'react';
import ReactDOM from '../node_modules/react-dom';
import './index.css';
import {Container,Row,Col,Image,Jumbotron} from '../node_modules/react-bootstrap';
import logoPython from './svg/python.png';
import logoPytorch from './svg/pytorch.png';
import logoDjango from './svg/django.png';
import reportWebVitals from './reportWebVitals';
import logoReact from './svg/react.svg';
import LoginForm from './components/login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
 ReactDOM.render(
  <React.StrictMode>
  
  <Jumbotron>
  <h1>Application de controle de tickets</h1>
 

 <LoginForm/>



  </Jumbotron>

  <Container>
    <Row>    
      <Col >
            <Image src= {logoPython} fluid />
        </Col>
      <Col >
            <Image src= {logoPytorch} fluid  />
        </Col>
      <Col>
            <Image src= {logoDjango} fluid />
        </Col>
        <Col >
            <Image src= {logoReact} fluid />
        </Col>
    </Row>
</Container>



  </React.StrictMode>,
  document.getElementById('logo')
);
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
