import React from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SbcCard from "./SbcCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopByCategory = () => {
  const settings = {
    dots: true,
    // infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="SbcButtons sliderButton_1" onClick={onClick}>
        <FiChevronRight />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="SbcButtons sliderButton_2" onClick={onClick}>
        <FiChevronLeft />
      </button>
    );
  }

  return (
    <>
      {/*-------------------------- Shop By Category--------------- */}
      <SbcDiv className="common_width section_padding flex justify-between">
        <div className="Sbc_title flex items-center">
          <h1>Shop By Category</h1>
          <button className="flex items-center">
            All Categories
            <span className="ml-2">
              <FiChevronRight />
            </span>
          </button>
        </div>
        {/* <div className="SbcButtons">
          <button>
            <FiChevronLeft />
          </button>
          <button>
            <FiChevronRight />
          </button>
        </div> */}
      </SbcDiv>
      <SbcSlider className="SbcCategories common_width pb-20">
        <Slider {...settings}>
          <SbcCard />
          <SbcCard />
          <SbcCard />
          <SbcCard />
          <SbcCard />
          <SbcCard />
        </Slider>
      </SbcSlider>
    </>
  );
};

export default ShopByCategory;

const SbcDiv = styled.div`
  .Sbc_title h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 27px;
    font-weight: bold;
  }

  .Sbc_title button {
    margin-left: 25px;
    color: #9f9f9f;
    font-size: 14px;
  }
`;

const SbcSlider = styled.div`
  .slick-prev,
  .slick-next {
    top: -30px;
  }
  .slick-prev {
    right: 0 !important;
    left: unset;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 25px;
  }

  .slick-dots li button::before{
    font-size: 12px;
    padding: 10px;
    color: grey;
  }

  .slick-dots li button::before{
    color: #3BB77E;
  }

`;
