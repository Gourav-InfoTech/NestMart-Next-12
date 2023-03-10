import React from 'react'
import { FiFilter } from 'react-icons/fi';
import styled from 'styled-components';

const FilterByPrice = () => {
    return (
        <>
            <FilterRoot>
                <div className='filterDiv'>
                    <div className='filterInput mb-3'>
                        <input type="range" step="0.01" max={1000} defaultValue={0} />
                    </div>
                    <div className='price_range'>
                        <p>From: <span>$0</span></p>
                        <p>To: <span>$1000</span></p>
                    </div>
                </div>
                <div className="filter_Options mt-3 flex flex-col gap-1">
                    <div className="heading">Color</div>
                    <div>
                        <input type="checkbox" id="red" name="red" value="" />
                        <label htmlFor="red"> Red(56) </label>
                    </div>
                    <div>
                        <input type="checkbox" id="Green" name="Green" value="" />
                        <label htmlFor="Green"> Green(78) </label>
                    </div>
                    <div>
                        <input type="checkbox" id="Blue" name="Blue" value="" />
                        <label htmlFor="Blue"> Blue(54) </label>
                    </div>
                </div>
                <div className='filter_Options mt-3 flex flex-col gap-1'>
                    <div className="heading">Item Condition</div>
                    <div>
                        <input type="checkbox" id="red" name="red" value="" />
                        <label htmlFor="red"> New(1504) </label>
                    </div>
                    <div>
                        <input type="checkbox" id="Green" name="Green" value="" />
                        <label htmlFor="Green"> Refurbished(27) </label>
                    </div>
                    <div>
                        <input type="checkbox" id="Blue" name="Blue" value="" />
                        <label htmlFor="Blue"> Used(45) </label>
                    </div>
                </div>

                <div className='filter_button inline-block mt-3'>
                    <button className='flex items-center'> <span className='mr-3 font-bold'><FiFilter /></span> Filter </button>
                </div>
            </FilterRoot>
        </>
    )
}

export default FilterByPrice;

const FilterRoot = styled.div`
    background: url("../Images/fillter-widget-bg.png") no-repeat right bottom;
    background-size: 150px;

    .filterInput input{
        width: 100%;
    }

    .price_range{
    font-size: small;
    display: flex;
    justify-content: space-between;
    }

    .price_range span{
    color:#3bb77e;
    font-weight: 600;
    }

    .filter_Options label{
        color: #687188;
        font-size: 13px;
        margin-left: 5px;
    }
    .filter_Options .heading{
        margin-bottom: 5px;
        color:#7e7e7e;
        display: inline-block;
        font-family:Lato;
        font-size:14px;
        font-weight:900;
    }

    .filter_button button{
        background-color:#3bb77e;
        color: white;
        padding: 10px 24px;
        font-size: 13px;
        border-radius:5px;
        font-family:"Quicksand";
        font-weight: 700;
    }
`
