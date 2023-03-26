/* eslint-disable jsx-a11y/anchor-is-valid */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

import Slide1 from '../../images/slider-badging.jpg'
import Slide2 from '../../images/slider-badag.jpg'
import Slide3 from '../../images/slider-scale.jpg'
import Slide4 from '../../images/slider-scales.jpg'

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
  }

  return (
    <Slider {...settings} className="imageSlider__Carousel">
      <div className="imageSlider__wrap">
        <a>
          <img src={Slide1} alt="" />
        </a>
      </div>
      <div className="imageSlider__wrap">
        <a>
          <img src={Slide2} alt="" />
        </a>
      </div>
      <div className="imageSlider__wrap">
        <a>
          <img src={Slide3} alt="" />
        </a>
      </div>
      <div className="imageSlider__wrap">
        <a>
          <img src={Slide4} alt="" />
        </a>
      </div>
    </Slider>
  )
}

export default ImgSlider
