import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import './Login.css';

export const Login = () => {

const [email,setEmail]  = useState("")
const [password,setPassword]  = useState("")
  const history = useHistory();

useEffect(()=>{
  if (sessionStorage.getItem("access_token")){
    history.push("/productos")
  }
},[])


  function handleSubmit(event) {
    event.preventDefault();

  }

  const login= async ()=>{
    
    let item= {email,password}
    let result = await fetch("http://localhost:8000/api/auth/login",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "X-Requested-With" : "XMLHttpRequest"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();   
    sessionStorage.setItem("access_token",JSON.stringify(result))
    history.push("/productos")

  }

    return (

        <div className="fondo">
        <div className="login-box">
        <h1 className="titulo">Login </h1>
        <form onSubmit={handleSubmit}>
      
          <label >usuario</label>
          <input type="text" name="usuario" placeholder="usuario" 
          onChange={(e)=>setEmail(e.target.value) }/>
         
          <label >contraseña</label>
          <input type="password" name="password" placeholder="contraseña"
           onChange={(e)=>setPassword(e.target.value) }/>
          <button onClick={login} >
            Login
          </button>
         
        </form>
        </div>
      </div>
    )
}
