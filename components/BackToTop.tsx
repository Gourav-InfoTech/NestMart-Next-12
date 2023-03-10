import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbArrowBigUp } from "react-icons/tb";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      if (!show && window.pageYOffset > 100) {
        setShow(true);
      } else if (show && window.pageYOffset <= 100) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkHeight);
    return () => {
      window.removeEventListener("scroll", checkHeight);
    };
  }, [show]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BTTDiv isVisible={show} onClick={scrollTop}>
      <TbArrowBigUp />
    </BTTDiv>
  );
};

export default BackToTop;

const BTTDiv = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 3%;
  right: 2%;

  background-color: #def9ec;
  color: #3bb77e;
  padding: 15px;
  border-radius: 50%;
  font-size: 20px;
  transition: all 0.3s ease;
  box-shadow: -2px 10px 66px -6px rgba(96, 255, 177, 1);
  -webkit-box-shadow: -2px 10px 66px -6px rgba(96, 255, 177, 1);
  -moz-box-shadow: -2px 10px 66px -6px rgba(96, 255, 177, 1);

  display: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? "block" : "none"};

  &:hover {
    background-color: #3bb77e;
    color: #def9ec;
    transition: all 0.3s ease;
  }
`;
