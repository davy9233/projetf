import React, { useState }  from 'react';
import Bootstrap,{Button} from 'react-bootstrap';
import ButtonSortie from '../../ui/ButtonExit';


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


export default function Inscription() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async e => {
  }






  return(
    <div>
    <h1>Inscription</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Identifiant</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
      <p>email</p>
        <input type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      
      <div class="container my-3">
          <div class="row">
            <div class="col-md-12 text-center">
              <Button class="center" type="submit">Enregistrement</Button>
            </div>
        </div>
      </div>
    </form>

    <div className="buttonSortie">
        <ButtonSortie />
      </div>
    </div>
  );
}