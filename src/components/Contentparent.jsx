import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Imagebox from './Imagebox';

const Contentparent = (props) =>{
    const [img,setImg]= useState([])
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bfxtdMjOul2WXI2HWaujqOhTtZFWUVByl82EWydN').then(response =>{
            console.log(response.data);
            setImg([response.data]);
        })
    },[]);
     return(
         <div className='cardDiv'>
            {img.map(data =>{
                return( <Imagebox img={data.hdurl} title={data.title} date={data.date} explanation={data.explanation}/> )

        })}
        </div>
 )
    
}

export default Contentparent;
