import React from 'react'
import './Login.css';

export const Login = () => {
    return (
        <div className="fondo">
        <div className="login-box">
        <h1>Login </h1>
        <form>
      
          <label for="username">usuario</label>
          <input type="text" placeholder="Enter Username"/>
         
          <label for="password">contraseña</label>
          <input type="password" placeholder="Enter Password"/>
          <input type="submit" value="Log In" />
         
        </form>
        </div>
      </div>
    )
}
