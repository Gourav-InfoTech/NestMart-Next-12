import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import {
  IoLocationOutline,
  IoPaperPlaneOutline,
  IoTimerOutline,
} from "react-icons/io5";
import styled from "styled-components";

const FooterMenu = () => {
  return (
    <>
      <FooterMenuDiv className="section_padding">
        <div className="address flex-2">
          <div className="addressLogoDiv">
            <Logo src="/Images/nest-logo.svg" alt="" />

            <h2>Awesome grocery store website template</h2>
          </div>

          <div className="contact_details">
            <ul>
              <li>
                <IoLocationOutline className="FooterMenuIcon"  />
                <strong>Address: </strong>
                <span>
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </li>
              <li>
                <FaHeadphonesAlt className="FooterMenuIcon" />
                <strong>Call Us:</strong>
                <span> (+91) - 540-025-124553</span>
              </li>
              <li>
                <IoPaperPlaneOutline className="FooterMenuIcon" />
                <strong>Email: </strong>
                <span> sale@Nest.com</span>
              </li>
              <li>
                <IoTimerOutline className="FooterMenuIcon" />
                <strong>Hours: </strong>
                <span> 10:00 - 18:00, Mon - Sat</span>
              </li>
            </ul>
          </div>
        </div>

        <MenuList className="company flex-1">
          <h1>Company</h1>
          <ul>
            <li>about us</li>
            <li>delivery information</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>contact us</li>
            <li>support center</li>
            <li>careers</li>
          </ul>
        </MenuList>
        <MenuList className="account flex-1">
          <h1>Account</h1>
          <ul>
            <li>sign in</li>
            <li>view cart</li>
            <li>my wishlist</li>
            <li>track my order</li>
            <li>help ticket</li>
            <li>shipping details</li>
            <li>compare products</li>
          </ul>
        </MenuList>
        <MenuList className="corporate flex-1">
          <h1>Corporate</h1>
          <ul>
            <li>become a vendor</li>
            <li>affiliate program</li>
            <li>farm business</li>
            <li>farm careers</li>
            <li>our suppliers</li>
            <li>accessibility</li>
            <li>promotions</li>
          </ul>
        </MenuList>
        <MenuList className="popular flex-1">
          <h1>Popular</h1>
          <ul>
            <li>milk & flavoured milk</li>
            <li>butter and margarine</li>
            <li>eggs substitute</li>
            <li>marmalades</li>
            <li>sour cream and dips</li>
            <li>tea and kombucha</li>
            <li>cheese</li>
          </ul>
        </MenuList>

        <div className="appInfo flex-2">
          <h1>Install App</h1>

          <p>From App Store or Google Play</p>
          <div className="InstallAppLinks flex gap-3">
            <a href="#">
              <img src="/Images/google-play.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/Images/app-store.jpg" alt="" />
            </a>
          </div>

          <p>Secured Payment Gateways</p>

          <img src="/Images/payment-method.png" alt="" />
        </div>
      </FooterMenuDiv>
    </>
  );
};

export default FooterMenu;

const FooterMenuDiv = styled.div`
  display: flex;

  .address {
    max-width: 20%;
  }

  .address ul li span {
    font-size: 14px;
  }

  .address ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .addressLogoDiv{
    margin-bottom: 30px;
  }
  .addressLogoDiv img{
    margin-bottom: 15px;
  }

  h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .appInfo .InstallAppLinks{
    margin: 25px 0 33px;
  }

  .appInfo .InstallAppLinks img {
    max-width: 120px;
  }

  

  .appInfo p{
    font-size: 14px;
    color: #253D4E;
    margin-bottom: 15px;
  }

  .FooterMenuIcon {
    display: inline-block;
    color: #51b877;
    margin-right: 8px;
  }
`;
const Logo = styled.img`
  width: 160px;
  height: auto;
`;

const MenuList = styled.div`
  ul li {
    text-transform: capitalize;
    margin-bottom: 12px;
    font-size: 14px;
    color: #253d4e;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  ul li:hover {
    color: #3bb77e;
    margin-left: 4px;
    transition: all 0.3s ease;
  }
`;
