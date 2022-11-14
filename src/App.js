import React,{useState} from "react";
import {Routes, Route} from 'react-router-dom'
import FetchNewsContent from "./components/FetchNewsContent";
import Loginpage from './components/Loginpage.js'
import Signuppage from './components/Signuppage.js'
import FetchNewsApi from './components/FetchNewsApi'
import Home from './components/Home'




const App = () => {
  const [user, setUser]= useState(null)
  return(
    <div>
   
    

<Routes>
    <Route path="Home" element={<Home user={user}/>}/>
      <Route path="Signuppage" element={<Signuppage setUser={setUser}/>}/>
      <Route path="Loginpage" element={<Loginpage setUser={setUser}/>}/>
      <Route path="FetchNewsApi" element={<FetchNewsApi/>}/>
      <Route path="FetchNewsContent" element={<FetchNewsContent/>}/>
      <Route path="FetchNewsContent/:index" element={<FetchNewsContent/>}/>
    </Routes>
    </div>
  )
}

export default App