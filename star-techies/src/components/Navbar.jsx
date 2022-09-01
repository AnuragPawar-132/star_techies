import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/" >Crypto Currency</Link>
        <Link to="/sharemarket" >Share Market</Link>
    </div>
  )
}

export default Navbar