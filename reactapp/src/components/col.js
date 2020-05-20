import React from "react";

export default function Col(props){
    return(<div className ={ "col-sm-"+ props.size }>
        {props.children}
    </div>)
}