import React, { useEffect, useState } from 'react'
import './FlowerPricing.css'
const FlowerPricing = () => {
    const [flowers, setFlowers] = useState(null)
    const addData = () => {
        fetch('http://localhost:3040/flowers')
            .then((response) => response.json())
            .then((data) => setFlowers(data));
    }
    useEffect(() => {
        addData()
    }, [])

    return (
        <>
            <div className='flower-pricing__wrapper'>
                <div className="container">
                    <div className="row ">
                        <h3 style={{ color: "RGB(27, 116, 94)", textAlign: "center" }}>Devoted to wonderful beauty</h3>
                        <h3 style={{ fontSize: "46px", color: "RGB(27, 116, 94),", textAlign: "center", margin: "0 auto" }}>Flowers Pricing</h3>
                        {
                            flowers?.map((flower) => (
                                <div className="col-4" style={{ margin: "50px 0" }}>
                                    <img style={{ width: "100%", height: "400px" }} src={flower.image} alt="" />
                                    <p style={{ fontSize: "22px", textAlign: "center", color: "RGB(27, 116, 94)" }}>{flower.name}</p>
                                    <p style={{ textAlign: "center", color: "RGB(27, 116, 94)" }}>$ {flower.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='flower-pricing__wrapper'>
                <div className="container">
                    <div className="row ">
                        <h3 style={{ color: "RGB(27, 116, 94)", textAlign: "center" }}>Devoted to wonderful beauty</h3>
                        <h3 style={{ fontSize: "46px", color: "RGB(27, 116, 94),", textAlign: "center", margin: "0 auto" }}>Events Pricing</h3>
                        <div className="col-4" style={{ margin: "50px 0", textAlign: "center" }}>
                            <div style={{ width: "100%", border: "1px solid RGB(27, 116, 94) ", padding: "100px 0", backgroundColor: "#FEF1E6" }}>
                                <h6 style={{ color: "RGB(27, 116, 94)" }}><span style={{ fontSize: '40px' }}>$16</span>per table</h6>
                                <p style={{ color: "RGB(27, 116, 94)" }}>Birthday Events</p>
                                <p style={{ color: "RGB(27, 116, 94)", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, assumenda?'</p>
                                <button style={{ color: "RGB(27, 116, 94)", border: "1px solid RGB(27, 116, 94)", padding: "5px 10px" }}>Shop Now</button>
                            </div>
                        </div>

                        <div className="col-4" style={{ margin: "50px 0", textAlign: "center" }}>
                            <div style={{ width: "100%", border: "1px solid RGB(27, 116, 94) ", padding: "100px 0", backgroundColor: "#FEF1E6" }}>
                                <h6 style={{ color: "RGB(27, 116, 94)" }}><span style={{ fontSize: '40px' }}>$31</span>per table</h6>
                                <p style={{ color: "RGB(27, 116, 94)" }}>Wedding Events</p>
                                <p style={{ color: "RGB(27, 116, 94)", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, assumenda?'</p>
                                <button style={{ color: "RGB(27, 116, 94)", border: "1px solid RGB(27, 116, 94)", padding: "5px 10px" }}>Shop Now</button>
                            </div>
                        </div>

                        <div className="col-4" style={{ margin: "50px 0", textAlign: "center" }}>
                            <div style={{ width: "100%", border: "1px solid RGB(27, 116, 94) ", padding: "100px 0", backgroundColor: "#FEF1E6" }}>
                                <h6 style={{ color: "RGB(27, 116, 94)" }}><span style={{ fontSize: '40px' }}>$52</span>per table</h6>
                                <p style={{ color: "RGB(27, 116, 94)" }}>Party Events</p>
                                <p style={{ color: "RGB(27, 116, 94)", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, assumenda?'</p>
                                <button style={{ color: "RGB(27, 116, 94)", border: "1px solid RGB(27, 116, 94)", padding: "5px 10px" }}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlowerPricing