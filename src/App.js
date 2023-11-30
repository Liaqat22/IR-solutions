import React from 'react'
import './App.css'
import {  Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import UserDetails from './pages/UserDetails'
import Home from './pages/Home'
import Layout from './Layout/Layout'
import Loader from './pages/Loader'


function App() {
  return (
    <>
    <Layout>
<Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/login' element ={<Login/>}/>
  <Route path='/userdetails' element = {
    <PrivateRoute>
      <UserDetails/>
    </PrivateRoute>
  }
  />
</Routes>
</Layout>
    </>
  )
}
export function PrivateRoute(props){
 const authentication = localStorage.getItem("user")
if(authentication){
  return props.children
}else{
 return <Loader/>
}
}

export default App
