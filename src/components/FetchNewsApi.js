

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
 
const storage = window.localStorage.getItem("token")
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
     
        <marquee scrollamount="15" style={{ color: 'white', fontSize: '5em',  fontFamily: "'Times New Roman', serif", fontWeight:'bold' }}>The Guardian</marquee>
        <br/>
        <br/>
      <div className='btn_container'>

      </div>
      <div>
      <Grid container spacing={{ xs: 2, md: 6}} columns={{ xs: 4, sm: 4, md: 4 }}>
        
        {
          data.map((value, index) => (
            <Grid item xs={1} sm={1} md={1} key={index} >
                    <Item  sx={{backgroundColor: "black"}}>   <Card sx={{ maxWidth: 500, backgroundColor: "#3D454D" }} className="news_card">
                      <CardMedia
                        component="img"
                        alt="news pic"
                        height="300"
                        image={value.urlToImage}
                      />
                      <CardContent>
                        <Typography color="white"  fontFamily="'Times New Roman', serif" gutterBottom variant="h6" component="div">
                          {value.title}
                        </Typography>
                        <Typography color="white" sx={{ fontWeight: 'light' }}  variant="body2">
                          {value.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                       
                      {/* <a  href={value.url} className="learn">Read More...</a> */}
<div key={index} >
                    <Link to={`/FetchNewsContent/${index}`}><Button  size="small" sx={{color: "#DBFF00"}}>...learn more</Button></Link>
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