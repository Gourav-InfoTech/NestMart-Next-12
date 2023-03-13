import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { DOD_BANNER } from "../Utils/DATA";
import DodBanner from "./DodBanner";
import DodItem from "./DodItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const dodBoxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 100 },
};

const DealsOfTheDay = () => {
  const [dodRef, inView] = useInView();

  return (
    <>
      {/* ------------Dod - Deals of the day----------------- */}
      <Dod
        ref={dodRef}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={dodBoxVariant}
      >
        <div className="Dod_title flex justify-between items-center mb-10 ">
          <h1>Deals Of The Day</h1>
          <button className="flex items-center">
            All Categories
            <span className="ml-2">
              <FiChevronRight />
            </span>
          </button>
        </div>

        <div className="Dod_Item flex gap-7">
          <DodItem />
          <DodItem />
          <DodItem />
          <DodItem />
        </div>

        <DodBanners className="section_padding gap-6">
          {DOD_BANNER.map((el, indx) => {
            return <DodBanner key={indx} data={el} />;
          })}
        </DodBanners>
      </Dod>
    </>
  );
};

export default DealsOfTheDay;

const Dod = styled(motion.div)`
  .Dod_title h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 27px;
    font-weight: bold;
  }

  .Dod_title button {
    margin-left: 25px;
    color: #9f9f9f;
    font-size: 14px;
  }
`;

const DodBanners = styled.div`
  display: flex;
  justify-content: space-between;
`;


// for complex animation

  // const [toBottom, setToBottom] = useState(true);
  // const scrollY = useRef(0);

  // const pageYscroll = () => {
  //   if (scrollY.current > window.pageYOffset) {
  //     setToBottom(false);
  //   } else {
  //     setToBottom(true);
  //   }
  //   scrollY.current = window.pageYOffset;
  // };

  // useEffect(() => {
  //   window?.addEventListener("scroll", pageYscroll);

  //   return () => {
  //     window?.removeEventListener("scroll", pageYscroll);
  //   };
  // }, []);

  // console.log(toBottom);

  // useEffect(() => {
  //   if (toBottom) {
  //     controls.start("visible");
  //   } else if (!toBottom && !inView) {
  //     controls.start("hidden");
  //   }
  // }, [inView, setToBottom]);
