import React, {  useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { nav } from "../../data/Data";
import { deleteCoockie, getCookie } from "../../../helpers/cookies";
import { deleteLocalStorage } from "../../../helpers/localStorage";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const navigate = useNavigate();
  const token=getCookie('token');
  
 
  const handelLogout = ()=>{
    deleteCoockie('token');
    deleteLocalStorage('user')
    navigate('/signIn')
  }


  
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
         
           {(token) ? <button className="btn1" onClick={()=>handelLogout()}>
              <i className="fa fa-logout"></i> LogOut
            </button> : <button className="btn1" onClick={()=>navigate('/signIn')}>
              <i className="fa fa-sign-out"></i> Sign In
            </button> }
            
          

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
