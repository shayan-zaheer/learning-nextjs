"use client"

import {Roboto} from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "500"
});

function Client() {
    console.log("Hello from the client component!")
  return (
    <div>
        <h1>Google Fonts</h1>
        <h2 className={roboto.className}>Hello, this is a roboto font!</h2>
    </div>
  )
}

export default Client