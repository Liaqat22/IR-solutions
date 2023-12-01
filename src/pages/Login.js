import axios from 'axios';
import React, { useState } from 'react'
import { Form, Input, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
// import image from './Media/Right Column.png'
import logo from './Media/_Placeholder Logo.png'
import gglLogo from './Media/_Google Logo Icon.png'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async () => {

    try {
      const { data } = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password
      });
      if (data) {
        message.success("login successfully")
        setAuth({
          ...auth,
          user: data
        })
        localStorage.setItem("user", JSON.stringify(data))
        console.log(data)
        navigate("/userdetails")

      } else {
        message.error(data.message)
      }
    } catch (error) {
      message.error("Authentication problem")
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center rowlogin">
          <div className="col-md-4 formCol">
            <img src={logo} alt='logo' className='logo' />
            <h1 className='welcomeback mb-3'>Welcome back</h1>
            <p className='paratext'>You need to be signed in to access the project dashboard.</p>
            <Form className='transForm' layout="vertical" onFinish={handleSubmit}>

              <Form.Item label="Email or username" name="username" className='formtext'>
                <Input type="text" onChange={(e) => setUsername(e.target.value)} required />
              </Form.Item>

              <Form.Item label="Password" name="password" className='formtext'>
                <Input.Password type="password" onChange={(e) => setPassword(e.target.value)} required />
              </Form.Item>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex  align-items-center">
                  <input type='checkbox' value="" />
                  <span className='mx-1'> Keep me sgin in</span>
                </div>
                <NavLink className=" forgetpassword">Forget Password</NavLink>
              </div>

              <div className="mt-3">
                <button className="btn btn-primary signInBTN">Sign in</button>
                <button className="btn btn-primary goggleBTN d-flex  align-items-center justify-content-center">
                  <img src={gglLogo} alt='gogglelogo' className='goggleimg'/>
                  <span className='mx-1'>Sign in with Google</span>
                </button>
              </div>
              <div className='mt-3 haventjointSignin'>
                <span >Haven’t joined yet?</span><NavLink style={{ border: "none", color: "#11161B" }} className="mx-2"><b>Sign in</b></NavLink>
              </div>
            </Form>
          </div>
          <div className='col-md-8 bgimg'>
            {/* <img src={image} alt='loginimg'/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login
