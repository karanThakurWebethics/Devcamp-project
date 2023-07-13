import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

<header className='header_head'>
  <nav>
    <ul>
      <li><Link to='/BootCamp' className='boot_camp'>BootCamp</Link></li>
      <li> <Link to='/Courses' className='Courses_camp'>Courses</Link> 
</li>
    </ul>
  </nav>
  <div className="logout">
    <Link to='/'>Logout</Link>
  </div>
</header>

    </>
  )
}

export default Header