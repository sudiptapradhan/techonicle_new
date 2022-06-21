import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class MultipleItems extends Component {
  render() {
    const settings = {
      //dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      //slidesToScroll: 3,
      swipeToSlide: true,
      initialSlide: 0
    };
    return (
      <div>
        <div className='headin ms-4 me-4 mt-2'>
            <h1>Read More</h1>
            <h6>See All</h6>
        </div>
        <div className='ps-4 pe-4'>
        <div className="line mb-3"></div>
        </div>
        <Slider {...settings}>
    
        <div className="one" >
                   
                   <a href="/blog"> <img alt = "Img1" className="img-responsive img-fluid"  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    </div>
                
                    </div>

                    
                    <div>
                   
                    <a href="/blog"><img alt = "Img2" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                   
                    
                    </div>
                 
                    </div>



                    <div>
                   
                    <a href="/blog"><img alt = "Img3" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
               
                    </div>


                    <div>
                   
                    <a href="/blog"><img alt = "Img4" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
                   
                    </div>

                    <div>
                
                    <a href="/blog"><img alt = "Img5" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
           
                    </div>


                    <div>
                 
                    <a href="/blog"><img alt = "Img6" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1551209028-8bbf88d0044f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                   
                    
                    </div>
                   
                    </div>

                    <div>
                  
                    <a href="/blog"> <img alt = "Img7" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
              
                    </div>
         

                    <div>
                   
                    <a href="/blog"> <img alt = "Img8" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
            
                    </div>

                   <div>
                  
                   <a href="/blog"> <img alt = "Img9" className="img-responsive img-fluid" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/></a>
                    <div className="bnr-descrptn mt-3">
                    <div className="date ms-1 me-1">19 Apr</div>
                    <div className="time ms-1 me-1">5 min read</div>
                    
                    <div className="wroteby">John Dayer </div>
                    </div>
                    <div className="side-content">
                    <h2 className="side-heading">What designers, Photographers and Insiders</h2>
                    
                    
                    </div>
                   
                    </div>


        </Slider>
      </div>
    );
  }
}