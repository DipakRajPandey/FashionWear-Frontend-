import React, { Children } from 'react'

const OrderLayOut =({ children})=> {
  return (
  <section className="py-12">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

export default OrderLayOut