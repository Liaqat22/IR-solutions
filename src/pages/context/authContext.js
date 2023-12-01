import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const User = createContext()

function AuthProvider({children}) {
    const [auth , setAuth] = useState({
        user : null
    })
    useEffect(()=>{
     const dataget =  localStorage.getItem("user")
    if (dataget) {
      const parseData = JSON.parse(dataget);
      setAuth({
        ...auth,
        user: parseData
      });
    }
    // eslint-disable-next-line
   },[])
  return (
    <>
      <User.Provider value={[auth,setAuth]}>
        {children}
        </User.Provider>
    </>
  )
}

const useAuth = () => useContext(User) //custom hook

export {AuthProvider ,User , useAuth} 
