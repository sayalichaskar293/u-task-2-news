
import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField } from "@mui/material"
import '../App.css';
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
        
        localStorage.setItem("username", name)
        localStorage.setItem("password", pwd)
        localStorage.setItem("token", response.data.token)

        
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
        <div className="App">

            <CssBaseline >
                <Container fixed maxWidth='xl'>


                    <Box sx={{ bgcolor: '#002E94', height: '100vh' }} >
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center">
                                    <br />


                                    <Item> <Card sx={{ minWidth: 500 }} >
                                        <CardContent>

                                            <Typography variant="h3" component="div">
                                                NewsApp
                                            </Typography>
                                            <br />


                                            <Typography variant="h6" sx={{ mb: 2.5 }} color="text.secondary">
                                                Welcome to newsapp
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

                                                    <p><label className="labels" for="username">Username</label></p>
                                                    {/* <p className='error'>{formErrors.username}</p>*/}
                                                    <input className='textfield' type="text" name="name" placeholder='username' value={name} onChange={(e)=> setName(e.target.value)}></input>
                                                    <br />
                                                   
                                                    



                                                    <p><label className="labels" for="username">Password</label></p>
                                                    {/* <p className='error'>{formErrors.password}</p> */}
                                                    <input className='textfield' type="password" name="password" placeholder='Password' value={pwd} onChange={(e)=> setPwd(e.target.value)}></input>  
                                                </div>
                                            </Box>


                                            <br />
                                            <Button variant="contained" color='secondary' type='submit' onClick={handleLogIn}>LogIn</Button>
                                            <br />
                                            <br />
                                            <Button variant="outlined" color='primary' >Haven't registered? Sign Up</Button>
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