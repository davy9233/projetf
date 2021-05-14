import React, { useState } from 'react';
import Bootstrap,{Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Login.css';
import { Redirect} from 'react-router-dom';
import Inscription from './Register'

async function loginUser(credentials) {
 return fetch('http://localhost:8000/gettoken/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [inscrire, setInscrire] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    setToken(token);

 
  }

  function test(){
    setInscrire('ok');
    
  }
  


    if (inscrire ==='ok')
    {return(

        <Inscription/>
    
      

    )}

     return(
    <div className="login-wrapper">
      <h1>Identification</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Identifiant</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div class="container my-3">
        <div class="row">
          <div class="col-md-6 text-center">
            <Button class="center" type="submit">Connexion</Button>
          </div>
          <div class="col-md-6 text-center">
            <Button class="center" onClick={test} >S'inscrire</Button>
          </div>
      </div>

        </div>
      </form>

      

    </div>
  )
  
 }



Login.propTypes = {
  setToken: PropTypes.func.isRequired
};