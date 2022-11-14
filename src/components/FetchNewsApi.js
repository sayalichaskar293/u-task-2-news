

import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, CardMedia, Typography, Paper, Grid, styled, TextField } from "@mui/material"
import fetchNewsContent from "./FetchNewsContent"
import '../App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import FetchNewsContent from './FetchNewsContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FetchNewsApi() {

  const [data, setData] = useState([])
const [content, setContent] = useState("")


  useEffect(() => {
 
const storage = localStorage.getItem("token")
    var config = {
        method: 'get',
        url: 'https://unicode-lp.onrender.com/news',
        headers: { 
          'Authorization': 'Bearer ' + storage
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data.articles)
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
      ,[])


  return (
 
    <div className='main_container'>
         <h1 className='main_head'>NEWSAPP</h1>
      <div className='btn_container'>

      </div>
      <div>
      <Grid container spacing={{ xs: 2, md: 6}} columns={{ xs: 4, sm: 4, md: 4 }}>
        
        {
          data.map((value, index) => (
            <Grid item xs={1} sm={1} md={1} key={index} >
                    <Item>   <Card sx={{ maxWidth: 500 }} className="news_card">
                      <CardMedia
                        component="img"
                        alt="news pic"
                        height="300"
                        image={value.urlToImage}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                       
                      {/* <a  href={value.url} className="learn">Read More...</a> */}
<div key={index} >
                    <Link to={`/FetchNewsContent/${index}`}><Button size="small" >Learn More</Button></Link>
                    </div>
              
                      </CardActions>
                    </Card></Item>
                  </Grid>
                
          )
         
          )}

       
         </Grid>
      </div>



    </div>
  )
}

export default FetchNewsApi