import styled from 'styled-components';
import { RxCaretDown, RxPerson } from 'react-icons/rx';
import { CiSearch,CiLocationOn } from 'react-icons/ci';
import { IoIosGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

import Dropdown from './Dropdown';


const Appbar = () => {
    return (
        <>
            <div className="mainAppDiv ">
                <div className="apptopbar ">
                    <div className="topInner appBarDivWidth py-2 text-zinc-500 flex justify-around text-xs">
                        <div>
                            <ul className='flex gap-3'>
                                <li>About Us</li>
                                <p> | </p>
                                <li>My Account</li>
                                <p> | </p>
                                <li>Wishlist</li>
                                <p> | </p>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                        <div>
                            <p> 100% Secure delivery without contacting the courier </p>
                        </div>
                        <div>
                            <ul className='flex gap-3'>
                                <Li><p>Need help?Call Us: <span className='text-green-600'>+1800 900</span></p></Li>
                                <p> | </p>
                                <Li>English <RxCaretDown /></Li>
                                <p> | </p>
                                <Li>USD <RxCaretDown /></Li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="appbottombar">
                    <div className='bottominner appBarDivWidth py-8 flex items-center justify-evenly'>
                        <div>
                            <Logo src="/Images/nest-logo.svg" />
                        </div>
                        <SearchDiv className='wrapper flex items-center'>
                            <Dropdown />
                            <p className='text-gray-600 font-thin'> | </p>
                            <Input placeholder='Search For Items....' type="text" />
                            <button className='text-2xl text-gray-600 mr-5'>
                                <CiSearch />
                            </button>
                        </SearchDiv>

                        <div className='location flex gap-4'>
                            <button className='flex items-center text-sm text-green-600 hover:-translate-y-1 transition-transform duration-200'> <span className='mr-1 text-gray-600'> <CiLocationOn /></span>Your Location <span className='ml-1 text-gray-600'><RxCaretDown /></span></button>
                        </div>
                        <div>
                            <ul className='flex items-end gap-4 text-gray-600 text-sm'>
                                <Uli> <Span><IoIosGitCompare /></Span> <P >Compare</P></Uli>
                                <Uli><Span><FaRegHeart /></Span><P>WishList</P></Uli>
                                <Uli><Span><BsCart3 /></Span><P>Cart</P></Uli>
                                <Uli><Span><RxPerson /></Span><P>Account</P></Uli>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appbar;

const Li = styled.li`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
width: 160px;
height: auto ;
`

const Uli = styled.li`
display:flex;
align-items: flex-end;
`

const Span = styled.span`
font-size: 23px;
`

const Input = styled.input`
    height: 45px;
    flex: 1;
    font-size:14px;
    line-height:50px;
    margin:0px 0px 0px 20px;
    padding:1px 2px 1px 0px;
    outline: none;
`

const SearchDiv = styled.div`
    width: 40%;
    border: 2px solid #BCE3C9;
    border-radius: 4px;
`

const P = styled.p`
    margin-left: 4px;
`