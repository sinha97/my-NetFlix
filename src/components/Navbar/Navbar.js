import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () =>{
        if(window.scroll > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                    onClick= {() => history.push("/")}
                    className="nav__logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="logo" 
                />

                <img 
                    onClick= {() => history.push("/profile")}
                    className="nav__avatar" 
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" 
                    alt="avatar" 
                />
            </div>
        </div>
    )
}

export default Navbar;
