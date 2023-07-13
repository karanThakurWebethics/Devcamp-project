import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState,useEffect } from 'react';

import axios from '../Api/Axios'

const ShowAddBootcamp = () => {

  const [showData,setShowData]= useState([])
  
  const getApiData=async()=>{

   try{

    const res = await axios.get("/bootcamps")
    setShowData(res.data.data)
    console.log(res)

   }catch(error){
    console.log(error)
   }
  }
  useEffect(()=>{
    getApiData();
  },[])



  return (
    <>

  

<Card style={{ width: '38rem' }}>
     
      <Card.Body>
        <Card.Title>Name of bootcamp</Card.Title>
        <Card.Text>
          add description
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Website</ListGroup.Item>
        <ListGroup.Item>Phone</ListGroup.Item>
        <ListGroup.Item>email</ListGroup.Item>
        <ListGroup.Item>address</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Join Bootcamp</Card.Link>
        
      </Card.Body>
    </Card>
    
    
    </>
  )
}

export default ShowAddBootcamp