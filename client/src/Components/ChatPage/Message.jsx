import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Message() {
    const [messages, setMessages] = useState([]);

    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        const url = `http://localhost:5000/messages?event=${id}`;
        
        fetch(url)
          .then((res) => res.json())
          .then((data) => setMessages(data))
          .catch((error) => {
            console.error(error);
            
          });
      }, [id]);

      console.log(messages);

      
    return (
        <div style={{ height: "58vh", backgroundColor: "#380000" }}>
            <h3>Show the message</h3>
            {messages.map((message) =>{
              return(
               <div className="border border-dark text-white mt-3">
               <p> Name </p>
               <p> {message.time_stamp} </p>
               <p> {message.content} </p>
               
               </div>
              )
            })}
            
        </div>
    )
}
