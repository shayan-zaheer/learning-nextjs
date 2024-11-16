"use client"
import { redirect } from 'next/navigation';
import React from 'react'

function AboutUser({params}) {
    const {id} = React.use(params);

    if(id == 4){
        redirect("/login");
    }

  return (
    <div>{id}</div>
  )
}

export default AboutUser