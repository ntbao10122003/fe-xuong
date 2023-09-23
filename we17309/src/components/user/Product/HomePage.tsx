import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Catagory from './Catagory';
import ListProduct from './ListProduct';
import News from './news';
import NewProduct from './NewProduct';
import Brand from '../base-user/Brand/Brand';
const HomePage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000, 
      };
      const brand = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
      };
  return (
    
    <div>
         <div className="main w-full py-6">
            <div className="main-container">
                    <Brand/>              
                    <Catagory />                         
                    <ListProduct/>
                    <NewProduct/>
                    <News />

                </div>                     
    </div>

    </div>
  )
}

export default HomePage