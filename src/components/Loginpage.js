
import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField } from "@mui/material"
import '../App.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Loginpage({setUser}) {

   const [name,setName] = useState("")
     const [pwd,setPwd] = useState("")
    const navigate = useNavigate()
    const [token, setToken] = useState("")

   
    

const handleLogIn= (e)=>{
  

    // let item={name, pwd}
    var data = qs.stringify({
        'username': name,
        'password': pwd
      });
      var config = {
        method: 'post',
        url: 'https://unicode-lp.onrender.com/api/auth/signin',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.token));
        
        window.localStorage.setItem("username", name)
        window.localStorage.setItem("password", pwd)
        window.localStorage.setItem("token", response.data.token)

        
      })
      .catch(function (error) {
        console.log(error);
      });
      

      e.preventDefault();
      console.warn(name, pwd);
      if(!name || !pwd) return;
      setUser({name: name, pwd: pwd});
      navigate('/Home')

  
    }      
    
    return (
        <div className="App" style={{backgroundColor: "black"}}>

            <CssBaseline >
               
                <Container fixed maxWidth='xl'>


                    <Box sx={{ backgroundImage: 'url("https://images.unsplash.com/photo-1588773846628-13fce0a32105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', height: '102vh' }} >
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center">
                                    <br />

                                    <br/>
                <br/>
                <br/>
                <br/>
                                    <Item sx={{backgroundColor: "black"}}> <Card sx={{backgroundColor: 'black', borderWidth: "0" , minWidth: 500 }} >
                                        <CardContent>

                                        <Typography component="div" fontWeight= 'bold' color="white" fontFamily="'Times New Roman', serif" variant="h2">
          The<br/> Guardian
        </Typography>


                                           
                                            <br />
                                            <Box
                                                component="form"
                                                sx={{
                                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                            >

                                                <div>

                                                    <p><label className="labels" style={{color: "white"}} for="username">Username</label></p>
                                                    {/* <p className='error'>{formErrors.username}</p>*/}
                                                    <input autoFocus className='textfield' style={{backgroundColor: "black", color: "white"}} type="text" name="name" placeholder='username' value={name} onChange={(e)=> setName(e.target.value)}></input>
                                                    <br />
                                                   
                                                    



                                                    <p><label className="labels" style={{color: "white"}} for="username">Password</label></p>
                                                    {/* <p className='error'>{formErrors.password}</p> */}
                                                    <input className='textfield' style={{backgroundColor: "black", color: "white"}} type="password" name="password" placeholder='password' value={pwd} onChange={(e)=> setPwd(e.target.value)}></input>  
                                                </div>
                                            </Box>

<br/>
                                            <br />
                                            <Button variant="contained" color='success' type='submit' onClick={handleLogIn}>LogIn</Button>
                                            <br />
                                            <br />
                                  <Link to={"/Signuppage"}  >  <Button variant="outlined" color='success' >Haven't registered? Sign Up</Button></Link>   
                                            <br />
                                            <br />

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

export default Loginpage;