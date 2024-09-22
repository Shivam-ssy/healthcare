import React from 'react'

function Card({title,price, details,handleEdits}) {
  return (
    <div className="card mb-3" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{details}</p>
    <div className='d-flex justify-content-between'>
    <div>Price:${price}</div>
    <button onClick={handleEdits}  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" className="btn btn-warning">Edit</button>
    </div>
  </div>
</div>
  )
}

export default Card
