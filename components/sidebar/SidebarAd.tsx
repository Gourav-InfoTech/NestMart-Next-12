import React from "react";
import styled from "styled-components";

const SidebarAd = () => {
  return (
    <>
      <AdBanner>
        <div className="AdText">
          <p>Oganic</p>
          <h2>Save 17% <br /> on <span>Oganic</span><br /> Juice</h2>
        </div>
      </AdBanner>
    </>
  );
};

export default SidebarAd;

const AdBanner = styled.div`
border-radius: 15px;
  background-image: url("Images/sidebar-orange-juice.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 295px;
  /* width: 100px; */
  margin-bottom: 24px;

  .AdText{
    padding:70px 40px
  }

  .AdText h2{
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 26px;
    color: #253d4e;
  }

  .AdText span{
    color: #3bb77e;
  }
  .AdText p{
    font-size: 12px;
    color: #adadad;
  }
`;
