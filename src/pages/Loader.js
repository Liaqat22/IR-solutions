import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loader() {
    const [count , setCount] = useState(3)
    const navigate = useNavigate()
    
    setTimeout(() => {
      setCount(count-1)
    }, 1000);
  if(count === 0){
    navigate('/login')
  }
  return (
    <div>
       <div className = "d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
       <div className="spinner-grow " style={{width: '3rem', height: '3rem'}} role="status">
      </div>
</div>
      <h4 className='text-center'>please LOGIN to access this page {count}</h4>
    </div>
  )
}

export default Loader
