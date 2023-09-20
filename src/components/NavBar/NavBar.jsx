import React from 'react'
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li> <a href="">Home</a> </li>
            <li> <a href="">Offers</a></li>
            <li> <a href="">Drinks</a> </li>
            <li> <a href="">Food</a> </li>
            <li> <a href="">Reservation</a> </li>
            <li> <a href="">About us</a> </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar