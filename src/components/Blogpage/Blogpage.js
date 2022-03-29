import React from 'react'
import './Blogpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faBehance
  } from "@fortawesome/free-brands-svg-icons";

function Blogpage() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-6 blog-bp">
          <div className="bp-img">
            <img className="img-responsive img-fluid" src="https://i.pinimg.com/originals/e0/61/e2/e061e26ec4b2c415350fe280833d0e96.jpg" alt="Example1"/>
            <div className="bp-descrptn mt-3">
          <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>
          </div>

        </div>
        <div className="col-lg-6 blog-sideadv">
        <div className="bp-descrptn mt-3">
          <div className="date ms-1 me-1">69 Feb</div>
          <div className="time ms-1 me-1">5 min read</div>
          
          <div className="wroteby">Tapan Sethi </div>
        </div>
        <div className="side_content">
          <h2 className="bp-heading">The Definitive Helmut Newton Photobook Is Reissued-for His 100th Birthday</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident
           nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores
             nam dolorum dolor vitae voluptates?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis.
              Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?Lorem ipsum dolor
               sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt,
                velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores
                 fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor
                  vitae voluptates?</p>
          
        </div>
        </div>
        </div>


        <div>
        <div className="row">
        <div className="col-lg-4 blog-bp">
        <h2 className="side_heading">Share this article</h2>
        <div class="social-container">
        <a href="https://www.linkedin.com/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.behance.net/"
        className="behance social">
        <FontAwesomeIcon icon={faBehance} size="2x" />
      </a>
      </div>
          </div>
        
        <div className= "col-lg-8 feed-sideadv">
        <div className="side_content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?</p>
          
        </div>
         {/* <h2>Heyy how are you</h2> */}
         
        </div>
        </div>
      </div>

      {/* <img src="https://media.istockphoto.com/photos/digital-artist-working-at-home-picture-id1213781338?b=1&k=20&m=1213781338&s=170667a&w=0&h=bDVoUJdiVm7eA_Kw1yEcX1mS-PnB0Jh6bS00NNVnu-g="/>
         */}
    </div>
  )
}

export default Blogpage