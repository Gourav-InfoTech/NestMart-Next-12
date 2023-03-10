import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import styled from "styled-components";

const DodItem = () => {
  return (
    <>
      <DoditemDiv>
        <div className="Dod_img">
          <img src="Images/dod-1.png" alt="" />
        </div>
        <div className="Dod_content bg-transparent">
          <div className="Dod_timer mb-5 flex justify-around px-3">
            <Timer>
              <p>24</p>
              <p>Days</p>
            </Timer>
            <Timer>
              <p>5</p>
              <p>Hours</p>
            </Timer>
            <Timer>
              <p>29</p>
              <p>Minutes</p>
            </Timer>
            <Timer>
              <p>10</p>
              <p>sec</p>
            </Timer>
          </div>
          <div className="dod_item_detail mx-5 bg-white rounded-2xl ">
            <div className="py-[25px] px-[30px]">
              <div>
                <h2 className="pb-2 text-[15px] font-[Quicksand] font-bold text-[#253d4e] leading-5">
                  name
                </h2>
                <p className=" text-[#adadad] text-sm">⭐⭐⭐⭐⭐</p>
                <p className="mb-4 text-[#adadad] text-sm">
                  By <span>NestFood</span>{" "}
                </p>
              </div>

              <div className="price_&_button flex justify-between gap-3">
                <p className="text-[#3bb77e] font-bold font-[Quicksand]">
                  $32.25
                </p>
                <button className="flex gap-2 items-center py-[6px] px-[15px] rounded-sm bg-[#def9ec] text-[#3bb77e] hover:bg-[#3bb77e] hover:text-[#def9ec] hover:-translate-y-1 transition-all duration-300">
                  <HiOutlineShoppingCart />
                  <span className="text-sm font-semibold">Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </DoditemDiv>
    </>
  );
};

export default DodItem;
const DoditemDiv = styled.div`
  flex: 1;
  .Dod_img img {
    border-radius: 20px;
  }

  .Dod_content {
    background: transparent;
    margin-top: -150px;
    position: relative;
    z-index: 99;
  }

  .dod_item_detail {
    box-shadow: 11px 13px 24px -12px rgba(173, 173, 173, 0.27);
  }

  .dod_item_detail p span {
    color: #3bb77e;
  }
`;

const Timer = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 8px;
  padding: 4px;

  p:first-child {
    color: #3bb77e;
  }

  p:last-child {
    color: #8f8f8f;
  }
`;
