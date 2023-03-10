import React from 'react'
import styled from 'styled-components';
import { FOOTER_DEALS_ARRAY } from '../../Utils/DATA';

const FooterDeals = () => {
  return (
    <FooterDealsDiv className='section_padding'>
        {
            FOOTER_DEALS_ARRAY.map((item,index)=>{
                return <div className='deal_item flex items-center' key={index}>
                        <div className='deal_icon'>
                            <img src={item.icon} alt="" />
                        </div>
                        <div className='deal_info'>
                            <h1>
                            {item.heading}
                            </h1>
                            <p>
                            {item.para}
                            </p>
                        </div>
                    </div>
            })
        }
    </FooterDealsDiv>
  )
}

export default FooterDeals;

const FooterDealsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .deal_item{
        background-color: #f4f6fa;
        border-radius: 10px;
        padding: 20px;
    }

    .deal_item .deal_icon{
        width: 60px;
        margin-right: 20px;
    }

    .deal_item .deal_info h1{
        font-family: "Quicksand";
        font-weight: 600;
        font-size: 18px;
    }

    .deal_item .deal_info p{
        font-family: "Lato";
        color: #adadad;
        font-size: 13px;
    }
`