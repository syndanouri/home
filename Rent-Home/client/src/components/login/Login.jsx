import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  // MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


import { signin } from "../../api/auth";
import { isAuthenticated, setAuthentification } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handelSubmit = async () => {
    await signin({ email, password })
      .then((res) => {
        console.log(res);
        setAuthentification(res.data.token, res.data.found);
        if (isAuthenticated() && isAuthenticated().role === "admin") {
          navigate("/admin");
        } else if (isAuthenticated() && isAuthenticated().role === "user") {
          navigate("/Addannonce");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(()=>{

  //   },[navigate])
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='4'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
          onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
          onChange={(e)=>setPassword(e.target.value)}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <div>
            <Link to="/signUp"> You don't have an account yet ?</Link>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg"
           style={{backgroundColor:"#27ae60"}}
            onClick={()=>handelSubmit()}>Sign in</MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
};

export default Login;
