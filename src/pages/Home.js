import React from 'react'

function Home() {
  return (
    <div>
      <div className='container homecontainer'>
        <div className='row'>
          <h1>Project description</h1>

          <ul className='m-3 paratext'>
            <li>Project created in React  </li>
            <li>Dashboard is our protected route which means without login you can not access it </li>
            <li>It provides your  fully responsive design </li>
            <li> You can get the source code by simply clicking on <b>GITHUB</b>  tab button </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
