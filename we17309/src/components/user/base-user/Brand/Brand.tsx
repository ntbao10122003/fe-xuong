import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Brand = () => {
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
    <>
       <div className="large ">
                    <div className="tilte ">
                        <div className="before-main"></div>
                        <h1 className="large  text-3xl font-bold block w-1/5">ĐỐI TÁC</h1>
                    </div>
                    <div className="mini py-8" >
                        <span >
                            Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
                        </span>
                    </div>
                </div>
                
                <div className="banner">
                        <div className="item-img flex">
                            <Slider {...brand} className="w-full">
                            <div className="img ">
                            <img src="../../../../src/assets/in1.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in2.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in3.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in4.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in5.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in6.jpg" alt="" />
                           </div>
                           <div className="img">
                            <img src="../../../src/assets/in7.jpg" alt="" />
                           </div>
                            </Slider>
                          
                        </div>
                </div>     
    </>
  )
}

export default Brand