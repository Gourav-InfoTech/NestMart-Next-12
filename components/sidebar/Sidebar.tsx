import React from 'react'
import styled from 'styled-components';
import Category from './Category';
import FilterByPrice from './FilterByPrice';
import NewProducts from './NewProducts';
import SidebarAd from './SidebarAd';
import SidebarBox from './SidebarBox'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <SidebarBox title="Category" content={<Category/>} />
        <SidebarBox title="Filter By Price" content={<FilterByPrice/>} />
        <SidebarBox title="New Products" content={<NewProducts/>} />
        <SidebarAd />
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    width: 19%;
    /* min-width: 400px; */
`

