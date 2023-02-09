import React from 'react'
import './Blog.css';

function Blog() {
  return (
    <div className='blog-container'>
        <video src='/videos/sc.mp4' autoPlay loop muted />
        <h1 className='header'>
            My thoughts...
        </h1>
    </div>
  )
}

export default Blog