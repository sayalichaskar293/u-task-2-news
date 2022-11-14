
import React, {useState, useEffect} from 'react'
import {Button, CssBaseline,  Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField} from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import App from '../App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Signuppage({setUser}) {

  
const [name,setName] = useState("")
const [fname,setFName] = useState("")
const [lname,setLName] = useState("")
const [email,setEmail] = useState("")
const [pwd,setPwd] = useState("")
const navigate = useNavigate()


const handleSignUp=(e)=>{
 
  // let item ={name,email,pwd}
  // console.warn(item)

  var data = qs.stringify({
    'username': name,
    'email': email,
    'firstName': fname,
    'lastName': lname,
    'password': pwd
  });
  var config = {
    method: 'post',
    url: 'https://unicode-lp.onrender.com/api/auth/signup',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
  e.preventDefault();
  console.warn(name, pwd, email, fname, lname);
  if(!name || !pwd || !email || !fname || !lname) return;
  setUser({name: name, pwd: pwd, email: email, fname: fname, lname: lname});
  navigate('/Loginpage')

}


  return (
    <div className="App">
 
<CssBaseline >
      <Container fixed maxWidth='xl'>
        
        
      <Box sx={{ bgcolor: '#002E94', height: '150vh' }} >
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12}  container
  direction="column"
  justifyContent="center"
  alignItems="center">
        <br/>
       
        
       
        
          <Item> <Card sx={{ minWidth: 500 }} >
      <CardContent>
     
        <Typography variant="h3" component="div">
          NewsApp
        </Typography>
        <br/>
       
        
        <Typography variant="h6" sx={{ mb: 2.5 }} color="text.secondary">
          Welcome to newsapp
        </Typography>
        <br/>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <div>
      
     <p><label classname="labels" for="username">Username</label></p> 
     <p className='error'></p>
       <input className='textfield' type="text" name="name" placeholder='Username' value={name} onChange={(e)=> setName(e.target.value)}></input>
       </div>
      <br/>
       <div>
       
     <p><label classname="labels" for="email">Email Id</label></p> 
     <p className='error'></p>
       <input className='textfield' type="text" name="email" placeholder='Email id' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <br/>
       
        <div>
       
        <p><label classname="labels" for="username">Password</label></p>
        <input className='textfield' type="password" name="password" placeholder='Password' value={pwd} onChange={(e)=> setPwd(e.target.value)}></input>
      </div>
      <br/>

<div>
      <p><label classname="labels" for="username">First Name</label></p>
        <input className='textfield' type="text" name="firstname" placeholder='First Name' value={fname} onChange={(e)=> setFName(e.target.value)}></input>
      </div>
      <br/>

<div>
      <p><label classname="labels" for="username">Last Name</label></p>
        <input className='textfield' type="text" name="lastname" placeholder='Last Name' value={lname} onChange={(e)=> setLName(e.target.value)}></input>
      </div>
      
    </Box>
        
      
        <br/>
       
       
        <Button variant="contained" color='secondary' onClick={handleSignUp} >Sign up</Button>
   
    
      
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card></Item>
        </Grid>
       
      </Grid>
    </Box>
        
        </Box>
      </Container>
      </CssBaseline>
     
    </div>
  );
}

export default Signuppage;