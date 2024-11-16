"use client"
import * as React from "react";

function Project({params}) {
    const parameters = React.use(params);
    console.log(parameters);
    return (
        <>
            {parameters.all.map(param => {
                return <li key={param}>{param}</li>
            })}
        </>
    );
}

export default Project;
