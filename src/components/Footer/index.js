import React from 'react';
import '../../styles/footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-content row'>
          <p className='col-12 col-md'>© Zytheme 2016, All Rights Reserved.</p>
          <div className='social-media col-12 col-md'>
            <a href='#facebook'> <i className="fa fa-facebook"></i> </a>
            <a href='#twitter'> <i className="fa fa-twitter"></i> </a>
            <a href='#dribbble'> <i className="fa fa-dribbble"></i> </a>
            <a href='#instgram'> <i className="fa fa-instagram"></i> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;