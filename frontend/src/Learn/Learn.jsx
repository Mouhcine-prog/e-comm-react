/*import React from 'react'
import './Learn.css'
import img1 from '../Assets/pexels-sebastiaan9977-1206870.jpg'
function Learn() {
  return (
    <div className='learn' style={{position: 'relative',top: '350px'}}>
        <img src={img1} style={{width:'100%',position:'absolute',right:'20px'}} alt="" />
      <div style={{marginBottom:'-20px',fontSize:'25px',fontWeight:'500'}}>We Are The Best</div>
      <p style={{    fontSize: '42px',fontWeight: '600'}}>Trendy Collection 2024</p>
      <button>LEARN MORE</button>
    </div>
  )
}

export default Learn*/
import React from 'react';
import './Learn.css';
import img1 from '../Assets/pexels-sebastiaan9977-1206870.jpg';

function Learn() {
  return (
    <div className='learn'>
      <img src={img1} alt="Fashion" />
      <div className='text-container'>
        <div>Best Fashion For Lady</div>
        <p>Top fashion for men</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}

export default Learn;
