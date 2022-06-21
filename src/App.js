import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom'; 
// import { Switch } from 'react-native-switch';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <Route path="/feed" exact element={<Feedpage/>}/>
      <Route path="/create" exact element={<Createblog/>}/>
      <Route path="/" exact element={<Landingpage/>}/>
      <Route path="/blog" exact element={<Blogpage/>}/>
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