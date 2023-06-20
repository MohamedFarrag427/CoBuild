import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../../styles/home.scss';

function Home({action1Ref}) {
  return (
    <div className='home' id='action1' ref={action1Ref}>
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="/images/slider1.jpg"
            alt="First slide"
          />
          <div className='slide-layer'>
            <Carousel.Caption className='font-load'>
              <h1>We’re Building Your Future</h1>
              <p>Take a step towards the future of construction with Cobuild.</p>
              <Button variant="outline-warning">learn more</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="/images/slider2.jpg"
            alt="Second slide"
          />
          <div className='slide-layer'>
            <Carousel.Caption className='font-load'>
              <h1>We’re Building Your Future</h1>
              <p>Take a step towards the future of construction with Cobuild.</p>
              <Button variant="outline-warning">learn more</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="/images/slider3.jpg"
            alt="Third slide"
          />
          <div className='slide-layer'>
            <Carousel.Caption className='font-load'>
              <h1>We’re Building Your Future</h1>
              <p>Take a step towards the future of construction with Cobuild.</p>
              <Button variant="outline-warning">learn more</Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Home;
