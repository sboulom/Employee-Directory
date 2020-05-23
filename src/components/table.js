import React from "react";

export default function Table (props){
    return (<table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Picture</th>
        <th scope="col" >First</th>
        <th scope="col">Last</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        
      </tr>
    </thead>
    <tbody>

     {props.ApiResults.length > 0 ? props.ApiResults.map((person, index) =>{
       return(
        <tr key = {index}>
        <th scope="row">{++index}</th>
        <td> <img src = {person.picture.thumbnail}/> </td>
        <td>{person.name.first}</td>
        <td>{person.name.last}</td>
        <td>{person.phone}</td>
        <td>{person.email}</td>
      </tr>
       )
     }): ""}


   
       
    </tbody>
  </table>)
}