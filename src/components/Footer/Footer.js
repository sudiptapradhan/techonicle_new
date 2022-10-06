import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faLinkedin,
//     faFacebook,
//     faTwitter,
//     faBehance
//   } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div>
    <div className="newsletter contain">
        <div className="contain">
          <div className="intro">
          <span className="bar"></span>
            <h2 className="text-center">Subscribe to our Newsletter</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <form className="sub form-inline" method="post">
                <div className="sub-option group"><button className="btnnnn btnnnn-primary-one" type="button">Learn More</button></div>
                <div className="sub-option group"><button className="btnnnn btnnnn-primary-one" type="button">Subscribe now for $10.99(Monthly)</button></div>
            </form>
            <span className="bar"></span>
        </div>
      </div>

        <footer className="section bg-footer">
        <div className="cont">
            <div className="row">


                <div className="col-lg-6 lef">
                <div className="">
                        <h6 className="footer-heading text-black ft">Send Me News: </h6>
                        <div className="group">
                            <input type="text" required />
                            <label>Enter your email</label>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-black">Content</h6>
                        <ul className="list-unstyled footer-link mt-4 ull">
                            <li><a href="/Landing">Blog</a></li>
                            <li><a href="/Landing">Podcasts</a></li>
                            <li><a href="/Landing">Books</a></li>
                            <li><a href="/Landing">Subscription</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-black">Help</h6>
                        <ul className="list-unstyled footer-link mt-4 ull">
                            <li><a href="/Landing">Sign Up </a></li>
                            <li><a href="/Landing">Login</a></li>
                            <li><a href="/Landing">Terms of Services</a></li>
                            <li><a href="/Landing">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">

                <div className="">
                        <h6 className="footer-heading text-black">Social</h6>
                        <ul className="list-unstyled footer-link mt-4 ull">
                            <li><a href="/Landing">Instagram</a></li>
                            <li><a href="/Landing">Facebook</a></li>
                            <li><a href="/Landing">LinkedIn</a></li>
                            <li><a href="/Landing">Youtube</a></li>
                        </ul>
                    </div>
                   
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt text-center mb-0 f-14 cc">2022 © Spectrum</p>
        </div>
    </footer>
    </div>
  )
}

export default footer