import React from "react";
import styled from "styled-components";
import { SlCallOut } from "react-icons/sl";
import { TfiPinterest } from "react-icons/tfi";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { SiYoutube, SiInstagram } from "react-icons/si";

const FooterBar = () => {
  return (
    <>
      <div className="footerBorder mb-[30px] border-t-[1px] border-[#3bb77da1]"></div>
      <FooterBarDiv>
        <div className="rights">
          <p>
            © 2023, <span>Nest</span> - HTML Ecommerce Template
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="Footer_bar_contact flex items-center gap-5">
          <div className="contact_info flex items-center gap-3">
            <div>
              <span className="text-3xl">
                <SlCallOut />{" "}
              </span>
            </div>
            <div>
              <h2>1900 - 6666</h2>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="contact_info flex items-center gap-3">
            <div>
              <span className="text-3xl">
                <SlCallOut />
              </span>
            </div>
            <div>
              <h2>1900 - 8888</h2>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div className="FooterSocialMedia">
          <div className="flex items-center">
            <h2 className="font-[Quicksand] font-semibold text-[#253d4e] mr-3">
              Follow Us
            </h2>
            <div className="socialIcons flex gap-1">
              <a href="">
                <RiFacebookFill />
              </a>
              <a href="">
                <RiTwitterFill />
              </a>
              <a href="">
                <SiInstagram />
              </a>
              <a href="">
                <TfiPinterest />
              </a>
              <a href="">
                <SiYoutube />
              </a>
            </div>
          </div>
          <p className="text-[#7e7e7e] text-[13px]">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </FooterBarDiv>
    </>
  );
};

export default FooterBar;

const FooterBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px !important;
  color: #7e7e7e;

  .rights {
    font-size: 14px;
  }

  .rights span {
    color: #3bb77e;
  }

  .Footer_bar_contact h2 {
    color: #3bb77e;
    font-weight: 600;
    font-size: 20px;
    font-family: "Quicksand";
  }
  .Footer_bar_contact p {
    font-size: 12px;
    color: #7e7e7e;
  }

  .socialIcons a {
    background-color: #3bb77e;
    color: white;
    padding: 8px;
    border-radius: 50%;
    font-size: 13px;
    transition: transform 0.3s ease;
  }

  .socialIcons a:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }
`;
