
import React, {useState, useEffect} from 'react'
import {Button, CssBaseline,  Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField} from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import App from '../App.css';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import Newspaper from '../images/newspaper.jpg'

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
    <div className="App" style={{backgroundColor: "black"}}>
 
<CssBaseline >
 
      <Container fixed maxWidth='xl'>
        
        
      <Box sx={{ backgroundImage: 'url("https://images.unsplash.com/photo-1588773846628-13fce0a32105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', height: '110vh' }} >
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12}  container
  direction="column"
  justifyContent="center"
  alignItems="center">
  
       
        
       
        
          <Item sx={{backgroundColor: "black"}}> <Card sx={{backgroundColor: 'black', borderWidth: "0" , minWidth: 500 }} >
      <CardContent>
     
        <Typography component="div" fontWeight= 'bold' color="white" fontFamily="'Times New Roman', serif" variant="h2">
          The<br/> Guardian
        </Typography>
     
       
        
       
    
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <div>
      
     <p><label classname="labels" style={{color: "white"}} for="username">Username</label></p> 
     <p className='error'></p>
       <input autoFocus className='textfield' style={{backgroundColor: "black", color: "white"}} type="text" name="name" placeholder='Username' value={name} onChange={(e)=> setName(e.target.value)}></input>
       </div>
      <br/>
       <div>
       
     <p><label style={{color: "white"}} classname="labels" for="email">Email Id</label></p> 
     <p className='error'></p>
       <input  className='textfield' style={{backgroundColor: "black", color: "white"}} type="text" name="email" placeholder='Email id' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <br/>
       
        <div>
       
        <p><label style={{color: "white"}} classname="labels" for="username">Password</label></p>
        <input className='textfield' style={{backgroundColor: "black", color: "white"}} type="password" name="password" placeholder='Password' value={pwd} onChange={(e)=> setPwd(e.target.value)}></input>
      </div>
      <br/>

<div>
      <p><label classname="labels" style={{color: "white"}} for="username">First Name</label></p>
        <input className='textfield' style={{backgroundColor: "black", color: "white"}} type="text" name="firstname" placeholder='First Name' value={fname} onChange={(e)=> setFName(e.target.value)}></input>
      </div>
      <br/>

<div>
      <p><label classname="labels" style={{color: "white"}} for="username">Last Name</label></p>
        <input className='textfield' style={{backgroundColor: "black", color: "white"}} type="text" name="lastname" placeholder='Last Name' value={lname} onChange={(e)=> setLName(e.target.value)}></input>
      </div>
      
    </Box>
        
      
        <br/>
       
       
        <Button variant="contained" color='success' onClick={handleSignUp} >Sign up</Button><br/><br/>
        <Link to={"/loginpage"}  >  <Button variant="outlined" color='success' >Already registered? Log In</Button></Link>   
   
    
      
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