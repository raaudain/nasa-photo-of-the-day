import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
//import styled from "styled-components";

// const PODCard = props =>{
//     return(
//         <div className="podInfo" key={props.id}>
//             <h1>Here's the photo for {props.date}</h1>
//             <h2>{props.title}</h2>
//             <a href={props.hdurl}><img className="PODPic" alt="" src={props.url} width="100%" /></a>
//             <p className="credit">Credit: {props.copyright}</p>
//             <p className="desc">{props.explanation}</p>
//         </div>
//     )
// }

//export default PODCard;

// const Cards = styled.div`
//     color: #000;


// `;


const PODCard = (props) => {
    return (
      <Col md="4" key={props.id}>
          <br / >
        <Card> 
          <CardBody>
            <CardTitle tag="h2">{props.title}</CardTitle>
            <a href={props.hdurl}><CardImg src={props.url} alt="Photo of the Day"
           /></a>
            <CardText className="text-left"><br/>{props.explanation}</CardText>
            <CardText>
              <small className="text-muted">Credit: {props.copyright}   Date: {props.date}</small>
            </CardText>
          </CardBody>
       </Card>
       <br />
      </Col>
      
    );
  };
  
  export default PODCard;