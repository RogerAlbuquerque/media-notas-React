import React,{useState} from 'react'
import "./App.css"
import Notas from "./components/notas"


function App() {

  const [notas,setNotas]= useState({"nota1":"", "nota2":"", "nota3":"", "nota4":"" })
  const resultado = parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)

  const handlSetNotas=(x)=>{

      if(x.target.getAttribute("name") === "nota1"){setNotas({"nota1":x.target.value, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":notas.nota4 })}
else  if(x.target.getAttribute("name") === "nota2"){setNotas({"nota1":notas.nota1, "nota2":x.target.value, "nota3":notas.nota3, "nota4":notas.nota4 })}
else  if(x.target.getAttribute("name") === "nota3"){setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":x.target.value, "nota4":notas.nota4 })}
else  if(x.target.getAttribute("name") === "nota4"){setNotas({"nota1":notas.nota1, "nota2":notas.nota2, "nota3":notas.nota3, "nota4":x.target.value })
  }
    
    

    }




  return (
   <>
  <h1>Teste de notas</h1>
  <Notas num={1} name="nota1" nota={notas.nota1} changeNote={handlSetNotas}/>      
  <Notas num={2} name="nota2" nota={notas.nota2} changeNote={handlSetNotas}/>    
  <Notas num={3} name="nota3" nota={notas.nota3} changeNote={handlSetNotas}/>    
  <Notas num={4} name="nota4" nota={notas.nota4} changeNote={handlSetNotas}/>    
   
   <p>A média de tudo é: {resultado/4}</p>
   
   </>
  );
}

export default App;
