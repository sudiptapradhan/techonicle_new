import React from 'react'
import Feed2 from './Feed2'

function Feedpage() {

  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-8 feed-bnr">
          <div className="bnr-img">
            <img className="img-responsive img-fluid" src="https://media.istockphoto.com/photos/digital-artist-working-at-home-picture-id1213781338?b=1&k=20&m=1213781338&s=170667a&w=0&h=bDVoUJdiVm7eA_Kw1yEcX1mS-PnB0Jh6bS00NNVnu-g="/>
        <div className="bnr-descrptn mt-3">
          <div className="date ms-1 me-1">05 Feb</div>
          <div className="time ms-1 me-1">5 min read</div>
          
          <div className="wroteby">Elen Josh </div>
        </div>
          </div>
          <div className="bnr-content">
            <h2 className="bnr-heading">What Designers, Photographers and other Insiders Missed about Paris Fashion Week</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus aliquid doloremque minima ea a, sequi reprehenderit eum exercitationem quo ullam. Labore vitae hic at quisquam dolores in nemo alias? Maiores quibusdam est tenetur rem facilis inventore architecto, possimus, tempore accusantium ipsum reprehenderit debitis odit odio praesentium! Doloremque laudantium iste suscipit magni cupiditate dolores atque, praesentium aliquid recusandae ipsum fugit eveniet, sunt provident totam asperiores nobis mollitia libero, illum vero. Unde natus quae, alias aperiam error perspiciatis dolor molestiae provident sapiente in voluptas deserunt.<br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus aliquid doloremque minima ea a, sequi reprehenderit eum exercitationem quo ullam. Labore vitae hic at quisquam dolores in nemo alias? Maiores quibusdam est tenetur rem facilis inventore architecto, possimus, tempore accusantium ipsum reprehenderit debitis odit odio praesentium! Doloremque laudantium iste suscipit magni cupiditate dolores atque, praesentium aliquid recusandae ipsum fugit eveniet, sunt provident totam asperiores.
            </p>
          </div>

        </div>
        <div className="col-lg-4 feed-sideadv">
        <img className="img-responsive img-fluid" src="https://media.istockphoto.com/photos/young-couple-kissing-picture-id1357748432?b=1&k=20&m=1357748432&s=170667a&w=0&h=_9Uba8kRvlGe88u1biFF7acFHyUnJrz84-mMb-oU34w="/>
        <div className="bnr-descrptn mt-3">
          <div className="date ms-1 me-1">69 Feb</div>
          <div className="time ms-1 me-1">5 min read</div>
          
          <div className="wroteby">Tapan Sethi </div>
        </div>
        <div className="side-content">
          <h2 className="side-heading">What designers, Photographers and Insiders</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?</p>
          
        </div>
        
        <img className="img-responsive img-fluid" src="https://media.istockphoto.com/photos/young-businesswoman-standing-in-the-corridor-picture-id1283362093?b=1&k=20&m=1283362093&s=170667a&w=0&h=TrVSAILp38qGk6HYOmrAJrx4S-CDVHFOP0yJy_Uzihg="/>
        <div className="bnr-descrptn mt-3">
          <div className="date ms-1 me-1">69 Feb</div>
          <div className="time ms-1 me-1">5 min read</div>
          
          <div className="wroteby">Tapan Sethi </div>
        </div>
        <div className="side-content">
          <h2 className="side-heading">What designers, Photographers and Insiders</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores fugiat illum ducimus perferendis. Veniam doloribus enim provident nobis excepturi sunt, velit veritatis pariatur. Maiores nam dolorum dolor vitae voluptates?</p>
          
        </div>
         {/* <h2>Heyy how are you</h2> */}
         
        </div>
      </div>

      {/* <img src="https://media.istockphoto.com/photos/digital-artist-working-at-home-picture-id1213781338?b=1&k=20&m=1213781338&s=170667a&w=0&h=bDVoUJdiVm7eA_Kw1yEcX1mS-PnB0Jh6bS00NNVnu-g="/>
         */}
    </div>
    <Feed2/>
    </>
  )
}

export default Feedpage