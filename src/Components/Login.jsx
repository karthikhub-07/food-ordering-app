import React from 'react'
import {useAuth0}  from '@auth0/auth0-react'
const Login = () => {
    let {loginWithRedirect}=useAuth0();
    
  return (
    <div>
        <button onClick={()=>loginWithRedirect}>login</button>
    </div>
  )
}

export default Login