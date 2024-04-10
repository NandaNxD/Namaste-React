import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName]=useState('login');

    const onlineStatus=useOnlineStatus();

    return (
        <div className="flex justify-between align-middle shadow-sm bg-pink-100 p-2 mb-3">
            <div className="logo-container">
                <img alt="logo" src={LOGO_URL}  className="w-24"></img>
            </div>
            <div>
                <ul className="flex gap-5 m-4 p-4">
                    <li>Online: {onlineStatus?'✔':'❌'}</li>
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