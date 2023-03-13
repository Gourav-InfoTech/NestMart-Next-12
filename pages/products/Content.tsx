import React from "react";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Image from "next/image";
// hello2

const Content = ({ data }: { data: any }) => {
  return (
    <PICard className="common_width section_padding">
      <div className="item">
        <div>
          <div className="item_image ">
            <img src={data?.image} alt="item-image" />
          </div>
          <p className="text-xs py-2 text-[#adadad]">{data?.category}</p>
          <h2 className="pb-2 text-[15px] font-[Quicksand] font-bold text-[#253d4e] leading-5">
            {data?.title}
          </h2>
          <p className="pb-4 text-[#adadad] text-sm">
            ⭐⭐⭐⭐⭐({data?.rating.rate})
          </p>
          {/* <p className="text-[#adadad] text-sm">By <span></span> </p> */}
        </div>

        <div className="price_&_button flex justify-between gap-3">
          <p className="text-[#3bb77e] font-bold font-[Quicksand]">
            ${data?.price}
          </p>
          <button className="flex gap-2 items-center py-[6px] px-[15px] rounded-sm bg-[#def9ec] text-[#3bb77e] hover:bg-[#3bb77e] hover:text-[#def9ec] hover:-translate-y-1 transition-all duration-300">
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </PICard>
  );
};

export default Content;

const PICard = styled.div`
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ececec;
    border-radius: 15px;
    max-width: 400px;
    margin: auto;
    padding: 20px 20px;
  }
  img {
    height: 130px;
    margin: auto;
  }
`;
