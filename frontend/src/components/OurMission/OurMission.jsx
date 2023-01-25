import React from 'react'
import './OurMission.css'

const OurMission = () => {
    return (
        <>
            <div className='our-miss__wrapper'>
                <div className="container">
                    <div className="row">
                        <div className='our-miss__card'>
                            <div className="our-miss__left col-6">
                                <div className='our-miss__content'>
                                    <h5 style={{fontSize:'46px',color:"white"}}>Our Mission</h5>
                                    <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi quae quo temporibus ipsum amet!</p>
                                    <button style={{padding:"5px 10px",border:"none"}}>Read More</button>
                                </div>
                            </div>
                            <div className="our-miss__right col-6">
                                <img style={{width:"100%"}} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default OurMission