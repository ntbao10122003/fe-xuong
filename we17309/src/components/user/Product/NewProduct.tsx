import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewProduct = () => {
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
    <div className="new-product">
                    <div className="tilte ">
                        <div className="before-main"></div>
                        <h1 className="large text-3xl font-bold block w-1/5">SẢN PHẨM MỚI </h1>
                    </div>
                    <div className="mini py-8" >
                        <span >
                            Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh
                        </span>
                    </div>
                    {/* slider */}
                    {/* <div className="slider flex pb-20">
                        <div className="box-slider flex text-center">

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/sp1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-2.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-3.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>
                            
                            
                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/sp1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>
                        </div>
                        <div className="fix-slider scale-100 hover:scale-90 delay-2000 animate-spin " >
                            <img src="../../../src/assets/slider1.jpg" alt=""/>
                        </div>

                    </div> */}

    </div>

    <div className="w-full flex mb-10" >
        <div className='w-full flex'> 
                        <Slider {...settings} className='box-slider border border-danger-500 w-full h-4/4 flex text-center'>
                            
                            <div className="box border border-danger-500">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500 block">2,500,000₫</span>
                            </div>
                            <div className="box border border-danger-500 ">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500">2,500,000₫</span>
                            </div>
                            <div className="box border border-danger-500 ">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500">2,500,000₫</span>
                            </div>
                            <div className="box border border-danger-500 ">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500">2,500,000₫</span>
                            </div>
                            <div className="box border border-danger-500 ">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500 ">
                                        <img src="../../../src/assets/sp1.jpg" alt="" />
                                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                        <span className="text-red-500">2,500,000₫</span>
                            </div>

                        </Slider>
                        <div className="fix-slider scale-100 hover:scale-90 delay-2000 animate-spin " >
                                        <img src="../../../src/assets/slider1.jpg" alt=""/>
                        </div>
        </div>
    </div>

    <div className="sale-product">
                    <div className="tilte ">
                        <div className="before-main"></div>
                        <h1 className="large text-3xl font-bold block w-2/5">SẢN PHẨM BÁN CHẠY </h1>
                    </div>
                    <div className="mini py-8" >
                        <span >
                            Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh
                        </span>
                    </div>
                    <div className="slider flex pb-20">
                        <div className="fix-slider scale-100 hover:scale-90 delay-2000 animate-spin">
                            <img src="../../../src/assets/slide2-1.jpg" alt="" />
                        </div>
                        <div className="box-slider flex text-center" >
                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-2.jpg"/>
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/slide1-3.jpg" alt=""/>
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>

                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/sp1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>
                            
                            
                            <div className="box border border-danger-500">
                                <img src="../../../src/assets/sp1.jpg" alt="" />
                                <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                                <span className="text-red-500">2,500,000₫</span>
                            </div>
                        </div>
                    </div>
    </div>
    </div>


  )
}

export default NewProduct