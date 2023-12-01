import React from 'react'
import { useAuth } from './context/authContext'

function UserDetails() {
    const [auth] = useAuth()
  return (
    <div>     
<div className = "container userdetailContainer">
  <div className='row d-flex justify-content-evenly align-items-center userdetailRow'>
      <h1 className='m-3 p-3' style={{color : "Highlight"}}>My Profile</h1>
    <div className='col-md-5'>
  <p className='userText'>First Name : <b>{auth?.user?.firstName}</b> </p>
  <p className='userText'>Last Name : <b>{auth?.user?.lastName}</b> </p>
  <p className='userText'>Email : <b>{auth?.user?.email}</b>  </p>
  <p className='userText'>username : <b>{auth?.user?.username}</b> </p>
  <p className='userText'>gender : <b>{auth?.user?.gender}</b>  </p>


    </div>
    <div className='col-md-4'>
    <img src={auth?.user?.image} alt='userimage' className='userimage'/>

    </div>
  </div>
</div>
    </div>
  )
}

export default UserDetails
