import Image from "next/image";

function Server() {
    console.log("Hello from the server component!")
  return (
    <div>
        <Image src="/lionel.jpg" alt="The Greatest of all time!" width={1000} height={1000} />
        {/* <Image src="https://images.unsplash.com/photo-1667983090922-3a996b026a26?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={1000} height={1000}/> */}
    </div>
  )
}

export default Server;

export const generateMetadata = () => { // function can only have this name
    return {
        title: "This is a server component!",
        description: "All about the server!"
    }
}