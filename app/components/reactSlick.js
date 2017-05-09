import './reactSlick.scss'

import React from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends React.Component {
  constructor() {
    super();
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="slick-container">
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
      </Slider>
  </div>
    );
  }
}
