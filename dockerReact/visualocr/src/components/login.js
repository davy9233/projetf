import React, {useState} from 'react'
import {Button} from '../ui/Button'
import {API_URL} from '../config'
import {AlertErrors} from '../ui/Alert'
import {Redirect} from 'react-router-dom'

export default function LoginForm ({onSuccess}) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async function (e) {
    e.preventDefault()
    setLoading(true)
    const response = await fetch(API_URL + '/users/?format=json&pwd='+password+'&username='+username, {
      method: 'get',
      headers: {
      }
    })
    const responseData = await response.json()
    if (response.ok) {
      const longueur = responseData.length
      console.log(longueur)

    } 
    
    else {
      setErrors(responseData.errors)
      console.log('ko')
    }
    setLoading(false)
  }

  return <form className="container my-4" onSubmit={handleSubmit}>
    <AlertErrors errors={errors.map(e => e.message)} />
    <div className="form-group">
      <label htmlFor="email">Nom d'utilisateur</label>
      <input type="text" name="email" className="form-control"  onChange={e => setUserName(e.target.value)}  required/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" className="form-control" onChange={e => setPassword(e.target.value)}  required/>
    </div>
    <Button type="submit" loading={loading}>Se connecter</Button>
    
  </form>

 

}