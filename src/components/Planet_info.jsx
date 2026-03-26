import React, { forwardRef } from "react"

const Planet_info = forwardRef(
  ({ title = "", number, description = "" }, ref) => {
    return (
      <section ref={ref} className="planet_info">
        <div className="wrapper">
          <div className="left_aligned_info">
            <h2>{title}</h2>
            <h4>#{number}</h4>
          </div>
          <p>{description}</p>
        </div>
      </section>
    )
  }
)

export default Planet_info