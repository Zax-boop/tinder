import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { Button } from './Button'
import './Navbar.css';
import Avatar from 'react-avatar';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [profile_pic, setPic] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);         
      } else {
          setButton(true);
      }
  };
  const showProfilePic = () => {
    if (window.innerWidth <= 960) {
        setPic(false);         
    } else {
        setPic(true);
    }
};

  useEffect(() => {
      showButton()
      showProfilePic()
  }, []);
  window.addEventListener('resize', showButton);
  window.addEventListener('resize', showProfilePic)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'> 
                <Link to='/Feed' className="navbar-logo" onClick={closeMobileMenu}> 
                    bunder 
                    <i class="fa fa-fire"></i>                
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                        to='/Messages' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            Messages
                        </Link>
                    </li>
                </ul>
                <Link to='/Profile' className="navbar-avatar" onClick={closeMobileMenu}> 
                    <Avatar src='/images/profile.jpeg' round="30px" size='60'/>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar