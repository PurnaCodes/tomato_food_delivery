import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState('Home');
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
            <ul className='navbar_menu'>

                <Link to='/' onClick={() => setMenu('Home')} className={menu == 'Home' ? 'active' : ''}>Home</Link>
                <li><a id='link' href='#explore_menu' onClick={() => setMenu('Menu')} className={menu == 'Menu' ? 'active' : ''}>Menu</a></li>
                <li><a id='link' href='#app_download' onClick={() => setMenu('Mobile-App')} className={menu == 'Mobile-App' ? 'active' : ''}>Mobile-App</a></li>
                <li><a id='link' href='#footer' onClick={() => setMenu('Contact-Us')} className={menu == 'Contact-Us' ? 'active' : ''}>Contact Us</a></li>
            </ul>
            <div className="navbar_right">
                <img src={assets.search_icon} />
                <div className="navbar_search_icon">
                    <Link to='/cart'><img src={assets.basket_icon} /></Link>
                    {getTotalCartAmount() > 0 ?
                        <div className="dot"></div>
                        :
                        <></>
                    }
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar