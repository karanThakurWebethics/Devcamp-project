import React from 'react';
import axios from '../Api/Axios'
import { useState,useEffect } from 'react';

//// boostrap data -----------

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DiffCourses = () => {

  const [showData,setShowData]=useState([]);
  const [showError,setShowError]=useState('')


   const getApiData=async()=>{
    try{
      const res = await axios.get('/courses')
      setShowData(res.data.data)
     console.log(res)

    }catch(error){
     console.log(error)
    }
   }
   useEffect(()=>{
    getApiData()
   },[])


  return (
    <> 

   {showData.map((corData,index)=>{

    const {id,title,description} = corData;

    return(

    <Col lg={12} style={{padding:'30px'}} key={index}>
        <Card style={{ width: '100%'}}>
      <Card.Body>
        <Card.Title style={{color:'Blue'}}>{title}</Card.Title>

        <Card.Text>
       {description}
        </Card.Text>
        
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Add BootCamp</Card.Link>
      </Card.Body>
    </Card>
        </Col>

    )
   })}
    
    </>
  )
}

export default DiffCourses