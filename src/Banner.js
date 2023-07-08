import React, { useEffect } from 'react';
import { useState } from 'react';
import requests from './requests';
import axios from 'axios';
import "./Banner.css"



function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){

            const request= await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ])

           return request;
        }
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length >n ? str.substr(0,n-1)+"...":str;
    }
    

  return (
     <header className='banner'
     
        style={{
            
            backgroundSize: "Cover",
            backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        
            
         

        }}
     
     
     
     
     >
        <div className='bannercontents' >
          
           
           <h1 className='bannertitle'>
            {movie?.title || movie?.name || movie?.original_name}
           </h1>

           <div className="bannerbuttons">

                  <button className='bannerbutton'>Play</button>   
                  <button className='bannerbutton'>My List</button> 
            </div>

            <h1 className='bannerdescription'>{truncate(movie?.overview,150)}</h1>

        </div>
       
  
      <div className='bannerfadebottom'></div>
             
     </header>
    
  )
}

export default Banner