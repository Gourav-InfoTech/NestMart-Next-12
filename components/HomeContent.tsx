import React from "react";
import styled from "styled-components";
import PopularProducts from "../containers/PopularProducts";
import Banner from "./Banner";
import DealsOfTheDay from "./DealsOfTheDay";

const HeroBannerData: HeroBannerDataT = {
  heading: (
    <h1 className="text-7xl font-bold mb-8">
      Fresh Vegetable <br /> Big discount{" "}
    </h1>
  ),
  para: "Save upto 50% off on our first order",
  backgroundImage: "/Images/herobanner-2.png",
  paraFontSize: "text-[30px]",
};

interface HeroBannerDataT {
  heading: any;
  para: string;
  backgroundImage: string;
  paraFontSize: string;
}

const HomeContent = ({data}:any) => {
  return (
    <MainContent>
      <Banner data={HeroBannerData} />
      <PopularProducts data={data}/>
      <DealsOfTheDay />
    </MainContent>
  );
};

// /home - {<MainContent>
//   <Banner data={HeroBannerData} />
//   <PopularProducts />
//   <DealsOfTheDay />
// </MainContent>

// /detail - <ItemDetail/>

// app-
// <Layout>
// <Route path="/"  element={ <Home />}/>
// <Route path="/itemdetail"  element={ <Detail />}/>
// </Layout>

export default HomeContent;

const MainContent = styled.div`
  flex: 1;
`;
