import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {
  const urlparams = useParams()
  console.log(urlparams);
  console.log(urlparams.id);
  const [AllRestaurants,setAllRestaurants]=useState([])

  //function to call api to get data from restaurents.json

  const getRestaurants=async()=>{
      await fetch('/restaurants.json')
      .then((data)=>{
          data.json()
          .then((result)=>{
              //console.log(result);//array of data
              setAllRestaurants(result.restaurants)

          })
          
      })
  }
  console.log(AllRestaurants);

  useEffect( ()=>{
      getRestaurants()
      
  },[])
  const viewrest=AllRestaurants.find(item=>item.id==urlparams.id)
  console.log(viewrest);
  return (
    <div >
       {viewrest?(
        <Row>
          <Col className='ms=5' md={4}>
          <Image src={viewrest.photograph} fluid/>
          </Col>
          <Col md={7}>
          <ListGroup>
      <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
      <ListGroup.Item><h4>{viewrest.neighborhood}</h4></ListGroup.Item>
      <ListGroup.Item><p>{viewrest.address}</p></ListGroup.Item>
      <ListGroup.Item><h3><Restop operate={viewrest.operating_hours}/></h3></ListGroup.Item>
      <Restreview  review={viewrest.reviews}/>
    </ListGroup>
  
          </Col>
        </Row>

       ):'null'}
    </div>
  )
}

export default Viewrest