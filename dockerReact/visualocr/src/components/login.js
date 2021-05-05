import React, {useState,setState} from 'react'
import {Button} from '../ui/Button'
import {API_URL} from '../config'
import {AlertErrors} from '../ui/Alert'
import {BrowserRouter as Router,Redirect,Route,Link, Switch,useHistory} from 'react-router-dom'
import Accueil from './home'
import reactDom from 'react-dom'


export default class LoginForm extends React.Component  {
 
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name
    

    this.setState({
      
      [name]:event.target.value
       
    });
  }



  handleSubmit = async function (e) {
    this.setState()
    e.preventDefault()
    const response = await fetch(API_URL + '/users/?format=json&pwd='+this.state.password+'&username='+this.state.username, {
      method: 'get',
      headers: {
      }
    })
    const responseData = await response.json()
    if (response.ok) {
      const longueur = responseData.length
      if(longueur === 1){  
    
    console.log('ok')
    return(

      reactDom.render( <Router>
        <Route path="/" exact component={Accueil}/>
      </Router>
    
      , document.getElementById('Accueil'))
      )
  
  }
           
          

      
       else {console.log('erreur soit de loggin ou de mot de passe')
        console.log(this.state.username)
      }
      
     

    } 
    
    else {
      console.log('la base est  injoignable')
    }

   

  }



 
 render(){
 
return (
 

  <div>
  <form className="container my-4" onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Nom d'utilisateur</label>
      <input type="text" name="email" className="form-control"  value={this.state.username} onChange={this.handleChange} id="username" name="username" required/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" name="password"   required/>
    </div>
    <Button type="submit" >Se connecter</Button>  
  </form>
 {JSON.stringify(this.state)}
 



  </div>
  )

 }

}