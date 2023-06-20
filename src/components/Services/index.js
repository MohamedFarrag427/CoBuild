import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../styles/services.scss';
function Services({action2Ref}) {
    const [items , setItems] = useState([]);

    useEffect(() => {
        axios.get("/json/data.json")
        .then(res => {setItems(res.data.services)})
    },[])

    const myService = items.map((item) => {
        return(
            <div className='col-sm-6 col-lg-3 service-item' key={item.id}>
                <img src={item.img_source} alt='service-img'/>
                <h3> {item.title} </h3>
                <p> {item.body} </p>
            </div>
        )
    })

    return (
        <div className='services' id='action2' ref={action2Ref} >
            <div className="main-title">
                <h2>Our Services</h2>
                <p>
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. 
                    Nam nec tellus a odio tincidunt auctor a ornare odio.
                </p>
            </div>

            <div className='container'>
                <div className='row'>
                    {myService}
                </div>
            </div>
        </div>
    )
}
export default Services;
