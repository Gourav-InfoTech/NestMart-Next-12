import React from 'react'
import { Product_Api } from '../../Utils/Api';
import Content from './Content';

const id = ({data}:any) => {

  return (
    <div>
        {/* <h1>{JSON.stringify(data)}</h1> */}
        <Content data={data}/>
    </div>
  )
}

export default id;

export async function getServerSideProps(context: any){
    const { params } = context
    const { id } = params;

    const res = await fetch(`${Product_Api}/products/${id}`)
    const data = await res.json();
    
    return{
        props : {data}
    }
}