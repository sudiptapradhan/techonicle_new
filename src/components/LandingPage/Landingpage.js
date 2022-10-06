import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import './landingpage.css';

function Landingpage() {
  const landinganimatn = useRef(null)

  useEffect(() => {
    Lottie.loadAnimation({
      container: landinganimatn.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./data.json')
    })
  },
[])

  return (
    <><div className="container mt-3">
      <div className="row">
        <div className="col-lg-5 lp-bnr">
          <div className="lp-heading">
            <div><h1>Hello
            Bloggers!</h1></div>
            <h4>Welcome, to your daily dose of technical content</h4>
          </div>

        </div>
        <div className="col-lg-7 lp-ani">
          <div className="ll-animatn" ref={landinganimatn}>
          </div>

        </div>
      </div>
    </div>

    <div className='wrapper'>
      <section className='left'>
       <div className='head'>
        <div className='b-img'>
         <img alt = "Img1" className="img-responsive img-fluid max-width:200%" src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200619221325/7-Best-Tips-For-Students-To-Stay-Motivated-When-Studying.png'/>
        </div>
        <div class="content">
          <h1>Writing-A beautiful Habit</h1>
          <div className='author'>
            <img alt = "Img2" src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
            <p>Veronica Smith</p>
          </div>
          <p>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
         </div>
       </div>

       <div className='lmao'>

       <div class="cardl col-md-7">
          <div class="b-card row mt-5">
            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img alt = "Img3" className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img alt = "Img4" src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>

            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img alt = "Img5" className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img alt = "Img6" src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>
          </div> 
          </div>

          <div class="cardl col-md-7">
          <div class="b-card row mt-5">
            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img alt = "Img7" className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img alt = "Img8" src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>


            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img alt = "Img9" className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img alt = "Img10" src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>
          </div>
          </div>

          </div>

      </section>

      <section className='right'>
        <div className='side-item'>
          <h2>About Us</h2>
          <p>Technical writing is a type of writing where the author is writing about a particular subject that requires direction, instruction, or explanation. TECHONICLE brings to you a platform where you can get to write and read technical blogs of all domains, share with the world your area of expertise and gain knowledge on various other fields as well.</p>
        </div>

        <div className='side-item'>
          <h2>Similar Topics</h2>
          <div className='tags'>
            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Web Development</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Android</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">HTML</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">CSS</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Bootstrap</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Machine Learning</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Python</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">JAVA</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Hardware</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Internet of Things</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">Arduino</a>			
		        </div>

            <div className="topic">				
			        <a href="/Landing" className="btnnnn tag-link">How to begin</a>			
		        </div>

          </div>
        </div>
      </section>
    </div>
      
      
      </>





  );
}

export default Landingpage