import React from 'react'
import "./filter.css"

function Filter() {
  return (
    <div className='col'>
        <h1 className='filter-heading'>
            Filters
        </h1>
        <label className='checkbox'>
            <input type="checkbox" />
            Paid Internship
      </label>
      <label className='checkbox'>
            <input type="checkbox" />
            Unpaid Internship
      </label>
      <label className='checkbox'>
            <input type="checkbox" />
            Full-time
      </label>
      <label className='checkbox'>
            <input type="checkbox" />
            Part-time
      </label>
      <label className='checkbox'>
            <input type="checkbox" />
            Same Region
      </label>
      <label className='checkbox'>
            <input type="checkbox" />
            Same Field
      </label>
    </div>
  )
}

export default Filter