import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
const Edit = () => {
    const[Details , setDetails ] = useState([]) ;
    const [title , setTitle] = useState("");
    const[price , setPrice] = useState(""); 
    const params = useParams();
    const navigate = useNavigate()
     const  handleSubmit = (e)=>{
e.preventDefault()
navigate(`/Products`);
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '  item has been Edit',
    showConfirmButton: false,
    timer: 1500
  });
fetch(`http://localhost:3500/products/${params.id}` , {
    method:"PUT" , 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title:title,
        price:price
    })
}).then((res)=>res.json()).then((item)=>console.log("item" , item))
    }
    useEffect(()=>{
fetch(`http://localhost:3500/products/${params.id}`).then((res)=>res.json())
.then((items)=>setDetails(items))
    } , []);
 
  return (

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label"> Title  </label>
      <input onChange={(e)=>setTitle(e.target.value)}  defaultValue={Details.title}  placeholder='Product Title' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Price</label>
      <input  onChange={(e)=>setPrice(e.target.value)} defaultValue={Details.price}   placeholder='Product Price' type="number" className="form-control" id="exampleInputPassword1"/>
    </div>
   
    <button type="submit" className="btn btn-primary">Edit</button>
  </form>    )
}

export default Edit