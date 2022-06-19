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
        <div className="col-lg-4 lp-bnr">
          <div className="lp-heading">
            <div><h1>Hello</h1></div>
            <div><h3>Designers</h3></div>
          </div>

        </div>
        <div className="col-lg-8 lp-ani">
          <div className="ll-animatn" ref={landinganimatn}>
          </div>

        </div>
      </div>
    </div>

    <div className='wrapper'>
      <section className='left'>
       <div className='head'>
        <div className='b-img'>
         <img className="img-responsive img-fluid max-width:200%" src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200619221325/7-Best-Tips-For-Students-To-Stay-Motivated-When-Studying.png'/>
        </div>
        <div class="content">
          <h1>Writing-A beautiful Habit</h1>
          <div className='author'>
            <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
            <p>Veronica Smith</p>
          </div>
          <p>lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
         </div>
       </div>

       <div className='lmao'>

       <div class="cardl col-md-7">
          <div class="b-card row mt-5">
            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>

            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
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
                <img className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
              </div>
            </div>  
            </div>


            <div class ="each-card col-sm-20">
            <div className=''>
              <div className='each-img'>
                <img className="img-responsive img-fluid " src='https://data.whicdn.com/images/335291915/original.jpg?t=1568585668'/>
              </div>
              <div class="title">
                <h1>Learning takes only one aspect</h1>
                <div className='b-author'>
                  <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                  <p>Veronica Smith</p>
                </div>
                <p>lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, distinctio sit amet consectetur adipisicing elit. Quidem, distinctio</p>
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
          <p>Technical writing is a type of writing where the author is writing about a particular subject that requires direction, instruction, or explanation. If you're still on the fence, then here are five reasons why you should seriously consider creating one. The best way to learn something is to teach others the knowledge that you have gained.</p>
        </div>

        <div className='side-item'>
          <h2>Similar Topics</h2>
          <div className='tags'>
            <div className="topic">				
			        <a href="#" className="btn tag-link">Web Development</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Android</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">HTML</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">CSS</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Bootstrap</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Machine Learning</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Python</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">JAVA</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Hardware</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Internet of Things</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">Arduino</a>			
		        </div>

            <div className="topic">				
			        <a href="#" className="btn tag-link">How to begin</a>			
		        </div>

          </div>
        </div>
      </section>
    </div>

    
    <div className="newsletter  contain">
        <div className="contain">
          <div className="intro">
            <h2 className="text-center">Subscribe to our Newsletter</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <form className="sub form-inline" method="post">
                <div className="sub-option form-group"><input className="form-control" type="email" name="email" placeholder="Your Email"/></div>
                <div className="sub-option form-group"><button className="btn btn-primary" type="button">Subscribe </button></div>
            </form>
        </div>
      </div>


      <footer className="section bg-footer">
        <div className="cont">
            <div className="row">
                <div className="col-lg-3 ">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-black">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Feuchers</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-black">Ressources</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Monitoring Grader </a></li>
                            <li><a href="">Video Tutorial</a></li>
                            <li><a href="">Term &amp; Service</a></li>
                            <li><a href="">Zeeko API</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-black">Help</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-black">Contact Us</h6>
                        <p className="contact-info mt-4">Contact us if need help with anything</p>
                        <p className="contact-info">+01 123-456-7890</p>
                        <div className="mt-5">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#"><i class="facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">2019 © Spectrum, All Rights Reserved</p>
        </div>
    </footer>
      
      
      </>





  );
}

export default Landingpage