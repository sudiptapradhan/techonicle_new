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
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4 lp-bnr">
          <div className="lp-heading">
            <div><h1>Hello</h1></div>
            <div><h3>Designer</h3></div>
          </div>

        </div>
        <div className="col-lg-8 lp-ani">
        <div className="ll-animatn" ref={landinganimatn} >
        </div>
         
        </div>
      </div>
    </div>
  );
}

export default Landingpage