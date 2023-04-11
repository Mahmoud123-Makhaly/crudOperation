import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddCategories = () => {
    const[Title , setTitle] = useState("");
    const[price , setPrice] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
e.preventDefault();
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'new item has been added',
    showConfirmButton: false,
    timer: 1500
  });
 const api  = await fetch(`http://localhost:3500/products` , {
    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:Title , 
        price:price
      }),
 }) ;
 const res = await api.json();
 console.log(res)
 navigate("/Products")
    }
  return (
   
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"> Title  </label>
    <input onChange={(e)=>setTitle(e.target.value)} placeholder='Product Title' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Price</label>
    <input onChange={(e)=>setPrice(e.target.value)} placeholder='Product Price' type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Add</button>
</form>
  )
}

export default AddCategories