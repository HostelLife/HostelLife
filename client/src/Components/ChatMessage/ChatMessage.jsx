import React, { useState, useEffect } from 'react';
import './chatMessage.css';

export default function ChatMessage({content, authorName, timestamp, isFirstPerson}) {
    return (
              
        <div className={!isFirstPerson ? 'actual-message-container all' : 'onRight all'}>               
            
            <h4>{authorName}</h4>
            <p>{content} </p>
            <span className='time-stamp'> {timestamp}</span>
             
        </div> 
    
    )
}
