import Banner from '../Banner';
import FooterBar from './FooterBar';
import FooterDeals from './FooterDeals';
import FooterMenu from './FooterMenu';

const Footer = () => {
    const FooterBannerData: FooterBannerDataT = {
        heading: <h2 className="text-5xl font-bold mb-8">Stay home & get your daily
            < br />  needs from our shop  </h2>,
        para: "Start You'r Daily Shopping with Nest Mart",
        backgroundImage: "/Images/footer-bg.png",
        image: "/Images/footer-img.png",
        paraFontSize: "text-[18px]",

    }

    interface FooterBannerDataT {
        heading: any;
        para: string;
        backgroundImage: string;
        image: string;
        paraFontSize: string;
    }

    return (
        <div className='common_width'>
            <Banner data={FooterBannerData} />
            <FooterDeals />
            <FooterMenu/>
            <FooterBar />
        </div>
    )
}

export default Footer