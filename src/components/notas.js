import React from "react"
export default function Nota(props){

return (
<>


    <p>Nota {props.num}</p>
    <input type="text" name={props.name} value={props.nota} onChange={(e)=>{props.changeNote(e)}}/>
    <p>Resulado da {props.num}ª nota: {props.nota} </p>


</>
)
}