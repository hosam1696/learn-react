import React from "react";

const Hello = (props: {girlName: string, children: any}) => {
    return (
       <div className="holder">
           <h2>My Girl Name is</h2>
           <h3>{props.girlName}</h3>
           {props.children}
           <hr/>
       </div>
    )
}

export default Hello;
