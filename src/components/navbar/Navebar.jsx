import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'


export default function Navebar() {
  return (
    <div className='navbar'>
        <div className="links">
            <Link to="/">shop</Link>
            <Link to="/card">
            <ShoppingCart size={30}/>
            </Link>
        </div>
    </div>
  )
}
