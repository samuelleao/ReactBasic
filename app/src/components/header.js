import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = props => {
    return (
        <header>
            <div className='logo'>
                <Link to='/'><h6>Exactly</h6></Link>
            </div>
            <div>
                <ul>
                    <li><NavLink activeClassName='active-link' to='/' exact>Home</NavLink></li>
                    <li><NavLink activeClassName='active-link' to='/about'>About Us</NavLink></li>
                    <li><NavLink activeClassName='active-link' to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header