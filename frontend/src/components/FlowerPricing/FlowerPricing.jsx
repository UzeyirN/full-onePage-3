import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './FlowerPricing.css'
const FlowerPricing = () => {
    const [flowers, setFlowers] = useState(null)
    const [sorted, setSorted] = useState({
        sorted: "value", reversed: false
    })
    const [value, setValue] = useState("")


    //! get
    const getData = () => {
        fetch('http://localhost:3040/flowers')
            .then((response) => response.json())
            .then((data) => setFlowers(data));
    }


    //!sorting
    const sortData = () => {
        setSorted({ sorted: "value", reversed: !sorted.reversed })
        const dataCopy = [...flowers]
        dataCopy.sort((a, b) => {
            if (sorted.reversed) {
                return a.value - b.value
            }
            return b.value - a.value
        })
        setFlowers(dataCopy)
    }

    //!filtering
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    //!deleting
    const handleDelete = async (id) => {
        await axios.delete(`http://www.localhost:3040/flowers/${id}`);
        getData()
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='flower-pricing__wrapper'>
                <div className="container">
                    <div className="row ">
                        <h3 style={{ color: "RGB(27, 116, 94)", textAlign: "center" }}>Devoted to wonderful beauty</h3>
                        <h3 style={{ fontSize: "46px", color: "RGB(27, 116, 94),", textAlign: "center", margin: "0 auto" }}>Flowers Pricing</h3>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "20px 0", alignItems: "center" }}>
                            <h5>Sort..</h5>
                            <button onClick={sortData} style={{ padding: "5px 10px", border: "none", backgroundColor: "orange", margin: "0 0 20px 0" }}>Sort by Price</button>
                            <h5>Filter...</h5>
                            <input onChange={handleChange} type="text" placeholder='filter by name' style={{ padding: "2px 5px" }} />
                        </div>
                        {
                            flowers?.filter(product => {
                                return value.trim().toLowerCase() === "" ? product : product.name.toLowerCase().includes(value.toLowerCase())
                            })
                                .map(({ _id, image, name, value }) => (
                                    <div className="col-4" style={{ margin: "50px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <img style={{ width: "100%", height: "400px" }} src={image} alt="" />
                                        <p style={{ fontSize: "22px", color: "RGB(27, 116, 94)" }}>{name}</p>
                                        <p style={{ color: "RGB(27, 116, 94)" }}>$ {value}</p>
                                        <button onClick={() => handleDelete(_id)} style={{ padding: "5px 10px", border: "none",color:"white", backgroundColor: "red", margin: "0 0 20px 0" }}>Delete</button>
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