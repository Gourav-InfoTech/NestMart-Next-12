import React from 'react'
import styled from 'styled-components';

const NewProducts = () => {
    return (
        <NewProductDiv>
            <div className="img">
                <img src="/Images/mangojuice.jpg" alt="" />
            </div>
            <div className="iteminfo">
                <h1>
                    Chen Cardigan
                </h1>
                <p>
                    $99.50
                </p>
                <p>⭐⭐⭐⭐⭐</p>
            </div>
        </NewProductDiv>
    )
}

export default NewProducts;

const NewProductDiv = styled.div`
    display: flex;
    gap: 5px;

    img{
        width: 80px;
    }

    .iteminfo h1{
        color:#3bb77e;
    font-family:'Quicksand';
    font-size:20px;
    font-weight:700;
    }


    .iteminfo p:last-of-type{
        font-size: 10px;
    }
    .iteminfo p:first-of-type{
        color: #a7a7a7;
        font-family: "lato";
    }

`