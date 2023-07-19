import React from 'react'
import hmbg from "../images/hmbg.jpg";

export default function HomeMade() {
  return (
    <div  className='h-[100vh]'
     style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${hmbg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',
      }}>
        <div className='border border-pink-300 bg-white h-[450px] w-[450px] rounded-full absolute left-[550px] mt-56'>
<h1 className='Border border-sky-300 mt-36 text-2xl'>Bake n' Flakes</h1>
<p className='mt-6 text-2xl'>HomeMade Muffins <br />Made with Love and Care </p>
<button className='mt-6 bg-sky-300 rounded-full  font-bold px-5 py-3 hover:bg-gray-300 '>Get Now</button>

        </div>
      
    </div>
  )
}
