import React from 'react'
import Idolo from "@/public/idolo.jpeg"
import Image from 'next/image'

function Users() {
  return (
    <div>
      <Image src={Idolo} alt="Idolo" />
    </div>
  )
}

export const generateMetadata = () => {
  return {
    title: "User",
    description: "All about the users"
  }
}

export default Users