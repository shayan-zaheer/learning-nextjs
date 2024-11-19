import React from 'react'

function page() {
    console.log(process.env.MONGO_URI);
  return (
    <div>page</div>
  )
}

export default page