import React from 'react'

const  ReviewPage= async({params})=> {
    const {id,reviewsId}=await params
  return (
    <div>
      <h3>Thi is reviews page </h3>
      <h4>product id is {id}</h4>
      <h5>reviews id is {reviewsId}</h5>
    </div>
  )
}
export default ReviewPage