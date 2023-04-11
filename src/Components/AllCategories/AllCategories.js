import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./AllCategories.css";
import Swal from 'sweetalert2';
const AllCategories = () => {
    const[products , setProducts] = useState([]);
    const API_URL = "http://localhost:3500/products";
    const fetchedData = async()=>{
        const api = await fetch(API_URL);
        const res = await api.json();
      setProducts(res)
    }
    useEffect(()=>{
fetchedData()
    } , []);
   //onDelete
   const onDelete =  (product)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3500/products/${product.id}` , {
          method:"DELETE"
       }).then((res)=>res.json()).then(()=>fetchedData())
      }
    })

    }
  return (
    <div>
    <h3>Product Page</h3>
    <Link to="/AddCategories"   className="btn btn-success mb-4">Add New Product</Link>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    
   {
    products.map((item)=>{
        return(
            
    <tr key={products.id}>
    <th >{item.id}</th>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>
    <button className="btn btn-danger" onClick={()=>onDelete(item)}>Delete</button>
    <Link to={`/edit/${item.id}`} className="btn btn-primary  mx-2">Edit</Link>
    <Link to={`/Products/${item.id}`} className="btn btn-info">View</Link>
    </td>
  </tr>
        )
    })
   }


  </tbody>
</table>
    </div>
  )
}

export default AllCategories