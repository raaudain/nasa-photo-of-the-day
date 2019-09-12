import React, {useState, useEffect} from "react";
import PODCard from "./PODCard";
import axios from "axios";
import {Container, Row} from "reactstrap"


export default function POD(){
    
    const [pod, setPod] = useState([]);


    useEffect(()=> {

        // Gets API
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=OtzHcO999QiozRF5WdhggeWhhMjwAXr3Whff1daa&count=9`)
            .then(response =>{

                // Sets the array of objects from the API
                console.log(response.data)
                const apod = response.data
                setPod(apod);

                // Object.values(response.data).forEach((key)=>{
                //     //console.log(key);
                //     const apod = key;
                //     setPod(apod)
                // })
            })

            .catch(error =>{
                console.log("Something went wrong -->", error);
            })
    },[])
  

    
    return(
        <Container>
            
            <h1>Random Pictures for NASA</h1>
            <br/>
            <Row>
            
            {/* Loops through the array of objects */}
            {pod.map((item) => { 
                console.log(item);
                return <PODCard  key={item.date} title={item.title}hdurl={item.hdurl} url={item.url} copyright={item.copyright} date={item.date} explanation={item.explanation} />})}

            </Row>

        </Container>
    )
}