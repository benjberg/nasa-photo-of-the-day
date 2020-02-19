import React from 'react';



const Image_box = (props) =>{
    
    return(
        <div>
             <img alt='outerspace' src={props.img} /> 
            <p>Title: {props.title}</p>
            <p>Date: {props.date}</p>
            <p>Description: {props.explanation}</p>
        </div>
    )
    
}



export default Image_box;