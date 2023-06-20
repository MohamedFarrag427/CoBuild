import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/contact.scss'


function Contact({action6Ref}) {
  const [items , setItems] = useState([]);

  useEffect(() => {
    axios.get("/json/data.json")
    .then(res => {setItems(res.data.contact)})
  })

  const myContact = items.map((item) => {
    return(
      <div className='contact-item col-12 col-md-6 col-lg' key={item.id}>
        <i className={item.icon_name}></i>
        <h4>{item.title}</h4>
        <p>{item.first_body}</p>
        <p>{item.last_body}</p>
      </div>
    )
  })

  return (
    <div className='contact' id='action6' ref={action6Ref}>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="500" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0" title='map'></iframe>
      </div>
      <div className='container'>
        <div className='contact-content row'>
          {myContact}
        </div>
      </div>
    </div>
  )
}
export default Contact;
