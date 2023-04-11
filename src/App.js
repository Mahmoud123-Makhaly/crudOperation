import React from 'react';
import Navs from './Components/Navs/NavBar';
import SideBar from './Components/SideBar/SideBar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllCategories from './Components/AllCategories/AllCategories';
import ProductDetails from './Components/ProductDetails/ProductDetails';
  import AddCategories from './Components/AddCategories/AddCategories';
import Edit from './Components/AllCategories/Edit';
const App = () => {
  return (
    <div>
 <Navs/>
 <div className='row'>
 <div className='col-md-2'>
<SideBar/>
 </div>
 <div className='col-md-10'>
 <Routes>
 <Route path='/' element={<Home/>}/> 
 <Route path='/Products' element={<AllCategories/>}/>
 <Route path='/Products/:id' element={<ProductDetails/>}/>
 <Route path='/AddCategories' element={<AddCategories/>}/>
 <Route path='/edit/:id' element={<Edit/>}/>

 </Routes>
 </div>
 </div>
    </div>
  )
}

export default App