import React from 'react';
import banner from "../../assets/banner.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import firstImg from "../../assets/sliderImages/1.jpg"
import secondImg from "../../assets/sliderImages/2.jpg"
import thirdImg from "../../assets/sliderImages/3.jpg"
import fourthImg from "../../assets/sliderImages/4.jpg"
import { useNavigate } from 'react-router-dom';



const HeroSection = () => {
  const navigate = useNavigate();



  return (
    <>
    {/*<div>
      <img src={banner} alt='bannerImg'/>
    </div>*/}

    <Carousel infiniteLoop autoPlay showStatus={false}>
                <div onClick={() => navigate('/allproducts')}>
                    <img src={firstImg} />
                </div>
                <div>
                    <img src={secondImg} />
                </div>
                <div>
                    <img src={thirdImg} />
                </div>
                <div>
                    <img src={fourthImg} />
                </div>
            </Carousel>
    

    </>

    

  )
}

export default HeroSection
