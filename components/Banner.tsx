import styled from "styled-components";
import { BiPaperPlane } from "react-icons/bi";

const Banner = ({ data }: any) => {
  return (
    <HeroDiv
      className="Hero_Banner"
      bgImage={data.backgroundImage}
    >
      <div className="banner_inner ">
        <div className="Banner_Text mb-8">
          {data.heading}
          <p className={`${data.paraFontSize} font-sans text-zinc-500`}>
            {data.para}
          </p>
        </div>
        <div className="BannerInput inline-block rounded-full bg-white">
          <div className="flex items-center">
            <button className=" text-xl text-gray-500 p-4 rounded-full">
              <span>
                <BiPaperPlane />
              </span>
            </button>
            <input placeholder="Your email address" type="text" />
            <SubscribeBtn>Subscribe</SubscribeBtn>
          </div>
        </div>
        <div>
          <img className="footer-img" src={data.image} alt="" />
        </div>
      </div>
    </HeroDiv>
  );
};

export default Banner;

const HeroDiv = styled.div<any>`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center center;
  border-radius: 30px;
  position: relative;

  .banner_inner {
    padding: 5em 4em;
  }

  .Banner_Text {
    font-family: "Quicksand", sans-serif;
    color: #253d4e;
  }

  .BannerInput input {
    outline: none;
    font-size: small;
  }

  .footer-img {
    position: absolute;
    right: 50px;
    bottom: 0;
    width: 500px;
    height: auto;
  }
`;

const SubscribeBtn = styled.div`
  background-color: #3bb77e;
  padding: 15px 40px;
  border-radius: 50px;
  color: white;
`;
