import React from 'react';
import axios from '../Api/Axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';



//// bootstrap data ------
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DiffCamp = () => {

  const [showData,setShowData]=useState([]);
  const [showError,setShowError]=useState('')


  const getApiData=async()=>{
    try{
 const res = await axios.get('/bootcamps')
 console.log(res)
    setShowData(res.data.data)

    }catch(error){
       console.log(error)
       setShowError(error)

    }
  }
  useEffect(()=>{
    getApiData();
  },[])


  return (
    <>
    {showData.map((mapData,index)=>{

const {title,description}=mapData

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

  <Card.Link>
    <Link to='/showaddbootcamp'>Add BootCamp</Link>
    </Card.Link>

</Card.Body>
</Card>
  </Col>

)
    })}

    </>
  
  )
}

export default DiffCamp