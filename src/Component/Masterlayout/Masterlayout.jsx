import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';

export default function Masterlayout({user,logOut}) {
  return (

    <>
             <Navbar user={user} logOut={logOut}/>
             <div className='container'>
             <Outlet/>
             </div>
    </>
  )
}
