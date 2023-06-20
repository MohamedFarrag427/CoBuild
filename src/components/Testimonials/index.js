import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../styles/testimonials.scss';

function Testimonials({action5Ref}) {
    const [items , setItems] = useState([]);

    useEffect(() => {
        axios.get("/json/data.json")
        .then(res => {setItems(res.data.clients)})
    },[])

    const myClients = items.map((item) => {
        return(
            <div className='col-12 col-md-6 col-lg client-say' key={item.id}>
                <div>
                    <img src= {item.img_source} alt={item.alt_name}/>
                    <span>{item.img_name}</span>
                </div>
                <p>{item.body}</p>
            </div>
        )
    })
        

    return (
        <div className='clients' id='action5' ref={action5Ref}>
            <div className="main-title">
                <h2>Our Clients Say</h2>
                <p>
                    Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.
                </p>
            </div>
            <div className='container'>
                <div className='client-items row'>
                    {myClients}
                </div>
            </div>
        </div>
        
    )
}
export default Testimonials