import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName,setBtnName]=useState('login');

    return (
        <div className="header">
            <div className="logo-container">
                <img alt="logo" src={LOGO_URL} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                    <button className="login-btn" onClick={()=>{
                        if(btnName==='login'){
                            setBtnName('logout')
                        }
                        else{
                            setBtnName('login')
                        }
                       
                        
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;