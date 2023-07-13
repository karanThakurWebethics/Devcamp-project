import React from 'react'
import Header from '../components/Header'
import '../css/bootcamp.css'
import { Link } from 'react-router-dom'


////Bootstrap--------------

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DiffCamp from './DiffCamp';


const BootCamp = () => {

  
  return (
    <>
   
  <Header></Header>

   <header className='bootcamp_head'>
        <div className="heading">Bootcamp</div>
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
               <Link to="/BootCamp">BootCamp</Link>
               <Link to="/Courses">Courses</Link>
            </div>
        </div>
    </header>

  {/* BootStrap portion--------- */}


  {/* showing data by  */}

   <Container>   
    <Row>  

  <DiffCamp></DiffCamp>
  
  </Row>
  </Container>


  
  
    </>
  )
}

export default BootCamp