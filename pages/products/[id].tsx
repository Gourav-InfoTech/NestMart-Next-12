import React from 'react'
import { Product_Api } from '../../Utils/Api';

const id = ({data}:any) => {

  return (
    <div>
        <h1>{JSON.stringify(data)}</h1>
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