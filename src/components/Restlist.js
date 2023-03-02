import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() {
    const [AllRestaurants,setAllRestaurants]=useState([])

    //function to call api to get data from restaurents.json

    const getRestaurants=async()=>{
        await fetch('./restaurants.json').then((data)=>{
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

  return (
    <Row>
        {
            AllRestaurants.map((item)=>(
                <Restcard
                restaurant={item}
                />
                
            ))
        }
    </Row>
  )
}

export default Restlist