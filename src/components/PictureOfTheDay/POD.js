import React, {useState, useEffect} from "react";
import PODCard from "./PODCard";
import axios from "axios";


export default function POD(){
    
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const [copyright, setCopyright] = useState("");

    

    useEffect(()=> {


        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=OtzHcO999QiozRF5WdhggeWhhMjwAXr3Whff1daa`)
            .then(response =>{

                console.log(response.data)
            

                Object.values(response.data).forEach((key)=>{
                    
                    setDate(key.date);
                    setTitle(key.title);
                    setImg(key.hdurl);
                    setDesc(key.explanation);
                    setCopyright(key.copyright)
                })

               

                console.log(response.data);
                setDate(response.data.date);
                setTitle(response.data.title);
                setImg(response.data.hdurl);
                setDesc(response.data.explanation);
                setCopyright(response.data.copyright)
            })

            .catch(error =>{
                console.log("Something went wrong -->", error);
            })
    },[])
  
    
    return(
        <div className="pic">
            
           
            <PODCard 
            
            key={date}
            title={title}
            hdurl={img}
            copyright={copyright}
            date={date}
            explanation={desc}
            
            />

        </div>
    )
}