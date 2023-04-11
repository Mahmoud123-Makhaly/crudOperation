import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const[details , setDetails] = useState([]);
    const params = useParams();
 useEffect(()=>{
fetch(`http://localhost:3500/products/${params.id}`).then((res)=>res.json())
.then((item)=>setDetails(item))
 } , []);
 console.log(details)
  return (
    <div>
    {
        details.title
    }
    </div>
  )
}

export default ProductDetails