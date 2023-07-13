import React from 'react'
import Header from '../components/Header'
import '../css/courses.css'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import DiffCourses from './DiffCourses'


const Courses = () => {
  return (
    <>
       
  <Header></Header>

<header className='bootcamp_head'>
     <div className="heading">Courses</div>
     <div className="dropdown">
         <button className="dropbtn">Dropdown</button>
         <div className="dropdown-content">
         <Link to="/BootCamp">BootCamp</Link>
         <Link to="/Courses">Courses</Link>
         </div>
     </div>
 </header>

  

   <Container>
    <Row>
      <DiffCourses></DiffCourses>
    </Row>
   </Container>


    </>
  )
}

export default Courses