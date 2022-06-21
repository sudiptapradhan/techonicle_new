import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom'; 
// import { Switch } from 'react-native-switch';
import './App.css';
import Landingpage from './components/LandingPage/Landingpage';
import Blogpage from './components/Blogpage/Blogpage';
import Createblog from './components/Create Blog/Createblog';
import Feedpage from './components/Feedpage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Landingpage />}/>
          <Route path='/blog' exact element = {<Blogpage/>}/>
          <Route path='/feed' exact element = {<Feedpage/>}/>
          <Route path='/create' exact element = {<Createblog/>}/>
        </Routes>
      </BrowserRouter>    
    </>     
  );
}

export default App;