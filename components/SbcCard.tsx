import React from "react";
import styled from "styled-components";

const SbcCard = () => {
  return (
    <>
      <SBC_CARD>
        <img src="categoryicons/category-1.svg" alt="" />
        <p>Milks and Dairies</p>
      </SBC_CARD>
    </>
  );
};

export default SbcCard;

const SBC_CARD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 39px 28px;
  background-color: #f2f8fad7;
  margin: 0px 12px 20px;
  border-radius: 10px;

  p {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 17px;
    font-weight: bold;
  }
  img {
    width: 70px;
    margin-bottom: 20px;
  }
`;
