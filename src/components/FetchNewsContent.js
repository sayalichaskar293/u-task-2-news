import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, CardMedia, Typography, Paper, Grid, styled, TextField } from "@mui/material"
import '../App.css';
import axios from 'axios'
import {useParams} from 'react-router-dom'


const FetchNewsContent =()=>{

  const [data, setData] = useState({})
const {index} = useParams()

  useEffect(() => {
 
    const storage = localStorage.getItem("token")
        var config = {
            method: 'get',
            url: `https://unicode-lp.onrender.com/news/`,
            headers: { 
              'Authorization': 'Bearer ' + storage
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log((response.data.articles[index]));
            setData(response.data.articles[index])
          
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }
          ,[])


  return(
    <>
    <div className='content_div'>
      <div className='logobar'>NEWSAPP</div>
   <div className='news_title'>{data.title}</div> 
   <div className='news_author'>{data.author}</div> 
    <div className='news_date'>{data.publishedAt}</div>
    <div><img src={data.urlToImage} alt="image" className='news_img'></img></div>
   <div className='news_info'> {data.content}</div>
    
    </div>
  

    </>
  )
  }

export default FetchNewsContent