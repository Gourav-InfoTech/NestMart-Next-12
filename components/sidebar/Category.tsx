import React from 'react'
import styled from 'styled-components'
import { CATEGORY_ARRAY } from '../../Utils/DATA' 

const Category = () => {
    return (
        <div className='Category_div mt-7'>
            {
                CATEGORY_ARRAY.map((item, index) => {
                    return <CategoryList className='flex gap-3 justify-between items-center' key={index}>
                        <img src={item.icon} alt="" />
                        <p className='flex-1'>{item.category}</p>
                        <span>{item.number}</span>
                    </CategoryList>
                })
            }
        </div>
    )
}

export default Category;

const CategoryList = styled.div`
    border: 1px solid #ebebebba;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius:5px;

    span{
        text-align: center;
        background-color: #bce3c9;
        border-radius: 50%;
        font-size: 12px;
        width: 25px;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 27px;
    }

    p{
        color: #253D4E;
        font-size: 13px;
        font-weight: 400;
    }

`

