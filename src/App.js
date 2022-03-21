import React from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'; 
// import { Switch } from 'react-native-switch';
import './App.css';
import { Navbar } from './components'
import Feedpage from './components/Feedpage';
function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/feed" element={<Feedpage/>}/>
      <Route path="/nav" element={<Navbar/>}/>

    </Routes>
    </BrowserRouter>
    {/* <Router>
    <div>
    <Link to='/feed'>Feedpage</Link>
    <Link to='/nav'>Navbar</Link>
    </div>
    <Route exact path='/feed' component={Feedpage}/>
    <Route exact path='/nav' component={Navbar}/>
    </Router> */}


    
        
    </> 
        
    
      
      
      
    
  );
}

export default App;


{/* <Router>
    <div>
      
    <Link to="/feed">Feedpage</Link><br/>
      <Link to="/nav">Navbar</Link><br/>
    </div>
        <Route exact path='/feed' component={Feedpage}/> 
        <Route exact path='/nav' component={Navbar}/> 

      </Router> */}