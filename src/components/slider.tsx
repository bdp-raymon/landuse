import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Slide1 from "assets/slides/slide1.jpg"
import Slide2 from "assets/slides/slide2.jpg"

const Slider: React.FC = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={Slide1} alt="حدیث خامنه ای" />
      </div>
      <div>
        <img src={Slide2} alt="حدیث خمینی" />
      </div>
    </Carousel>
  )
}

export default Slider
