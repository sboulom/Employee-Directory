import React from "react";

export default function Search (props){
    return (<div>
        <input type = "text" name= "Search"  value={props.Search}  onChange ={props.handleChange} />
    </div>)
}