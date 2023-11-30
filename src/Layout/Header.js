import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { useAuth } from '../pages/context/authContext'
function Header() {
    const [auth , setAuth] = useAuth()
    const handleLogout =()=>{
      setAuth({
        ...auth ,
        user : null
      })
      localStorage.removeItem('user');
  
    }
  return (
    <div>
          <div >
  <nav className="navbar navbar-expand-lg bg-body-tertiary  p-0">
  <div className="container-fluid containerfluidnav" >
    <Link className="navbar-brand" to="#"><b >
Frontend Task </b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="https://github.com/Liaqat22/IR-solutions" >Github </NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/" >Home </NavLink>
        </li>
      
        {!auth.user? (<>
          <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/login" >Login </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link  m-2 " to="/register"  >Register</NavLink>
        </li>
        </>): (<>
         
                  <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/userdetails" >Dashboard </NavLink>
          </li>
          <li className="nav-item">
                    <NavLink onClick={handleLogout} to="/login"
                      className="nav-link  "  style={{color : '#df0a0a'}}>
                      Logout
                    </NavLink>
                  </li>
       
        </>)}
     
        
       
       
      
      </ul>
     
    </div>
  </div>
</nav>


    </div>
    </div>
  )
}

export default Header
