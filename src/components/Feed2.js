import React from 'react'

function Feed2() {
    return (
        <>
        <br/>
        <div className='headin ms-4 me-4 mt-2'>
            <h2 className="bnr-heading-2">The Latest Articles</h2>
            <h6>See All</h6>
        </div>
        <div className='ps-4 pe-4'>
        <div className="line mb-3"></div>
        </div>
        <div className="container-fluid mt-2">
            <div className="row justify-content-center">
                <div className="col-4 col-sm-4 col-md-3 feedp3">
                    <img alt = "Img1" className="seeart" src="https://indiacityblog.com/wp-content/uploads/2020/03/the-closets-of-fashion-bloggers-blog-benetton-1-1200x909.jpg" />
                </div>
                <div className="col-7 col-sm-7 col-md-8 feedp3">
                    <div className="by">by <span>Elen Josh</span></div>
                    <h2 className='mb-0'>The Really Boring, Non-Cancel Culture War Truth</h2>
                    <p className='contentfeed2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis rem 
                        sit molestias enim obcaecati expedita iure esse magnam, vel aliquid non facilis 
                        ab ipsam aut doloribus vero mollitia autem!</p>
                    <div className='createdate mt-2'>
                    <p className="p-0 m-0 me-2">Feb 11</p>    
                    <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                    </div>
                </div>
            </div>
        </div>
                <div className="container-fluid mt-4">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-4 col-md-3 feedp3">
                        <img alt = "Img1" className="seeart" src="https://www.mumpacktravel.com/wp-content/uploads/2019/03/Where-Is-The-World2.jpg" />
                    </div>
                    <div className="col-7 col-sm-7 col-md-8 feedp3">
                        <div className="by">by <span>Elen Josh</span></div>
                        <h2 className='mb-0'>The Really Boring, Non-Cancel Culture War Truth</h2>
                        <p className='contentfeed2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis rem 
                            sit molestias enim obcaecati expedita iure esse magnam, vel aliquid non facilis 
                            ab ipsam aut doloribus vero mollitia autem!</p>
                        <div className='createdate mt-2'>
                        <p className="p-0 m-0 me-2">Feb 11</p>    
                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="container-fluid mt-4">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3 feedp3">
                            <img alt = "Img1" className="seeart" src="https://blog.hubspot.com/hubfs/how-long-blog-posts.jpg" />
                        </div>
                        <div className="col-7 col-sm-7 col-md-8 feedp3">
                            <div className="by">by <span>Elen Josh</span></div>
                            <h2 className='mb-0'>The Really Boring, Non-Cancel Culture War Truth</h2>
                            <p className='contentfeed2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis rem 
                                sit molestias enim obcaecati expedita iure esse magnam, vel aliquid non facilis 
                                ab ipsam aut doloribus vero mollitia autem!</p>
                            <div className='createdate mt-2'>
                            <p className="p-0 m-0 me-2">Feb 11</p>    
                            <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedlast mt-4">
                    <div className="feedlastdiv p-5">
                        <h1 style={{'color':'white'}}>The Really Boring, Non-Cancel Culture War Truth</h1>
                        <p style={{'color':'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </div>
                </>               
    )
}

export default Feed2