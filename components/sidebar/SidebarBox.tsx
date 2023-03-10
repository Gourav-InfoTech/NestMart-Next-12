import React from 'react'
import styled from 'styled-components';



const SidebarBox = ({title, content} :{title : string, content: any}) => {
    return (
        <>
            <Box className='sidebar_box'>
                <h1 className='box_title mb-4 pb-3'> {title} </h1>
                {content}  
            </Box>
        </>
    )
}

export default SidebarBox;

const Box = styled.div`
    border: 1px solid #ebebeb;
    border-radius: 15px;
    padding: 24px 28px;
    box-shadow: 11px 13px 24px -12px rgba(173,173,173,0.27);
    margin-bottom: 24px;
    
    .box_title{
    position: relative;
    color: #253D4E;
    font-family: 'Quicksand', sans-serif;
    font-size: 23px;
    font-weight: bold;
    border-bottom: 1px solid #ececec;

    &::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #BCE3C9;
}

}

`

