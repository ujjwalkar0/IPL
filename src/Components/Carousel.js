import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import img5 from './image/5.png'
import img6 from './image/6.webp'
import img1 from './image/5.jpg'


function MyCarousel(){
    return (
    <div className="App">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      style={{height:'500px'}}
      alt="First slide"
    />
    <Carousel.Caption>
      <p style={{color:"wheat",fontSize:"30px"}}><strong>India's Largest Cricket game</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img6}
      style={{height:'500px'}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"wheat",fontSize:"60px"}}><strong>Lorem Ipsum</strong></h3>
      <p style={{color:"wheat",fontSize:"30px"}}><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      style={{height:'500px'}}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 style={{color:"wheat",fontSize:"60px"}}><strong>Lorem Ipsum</strong></h3>
    <p style={{color:"wheat",fontSize:"30px"}}><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    );
}

export default MyCarousel;