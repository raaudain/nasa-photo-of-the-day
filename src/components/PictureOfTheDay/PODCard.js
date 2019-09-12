import React from "react";


const PODCard = props =>{
    return(
        <div className="podInfo" key={props.date}>
            <h1>Here's the photo for {props.date}</h1>
            <h2>{props.title}</h2>
            <a href={props.hdurl}><img className="PODPic" alt="" src={props.hdurl} width="100%" /></a>
            <p className="credit">Credit: {props.copyright}</p>
            <p className="desc">{props.explanation}</p>
        </div>
    )
}

export default PODCard;