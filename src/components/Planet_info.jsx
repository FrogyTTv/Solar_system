import React from 'react'

function Planet_info({ title = '', number, describtion = ''}) {
  return (
    <section className='planet_info'>
        <div className="wrapper">
            <div className="left_aligned_info">
                <h2>{title}</h2>
                <h4>#{number}</h4>
            </div>
            <p>{describtion}</p>
        </div>
    </section>
  )
}

export default Planet_info