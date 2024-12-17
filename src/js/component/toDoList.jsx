import React, { useState } from "react";
import { Tarea } from "./tarea";

export const ToDoList = () => {
    const [Listados, setListados] = useState([
        {
            trabajo: "Sacar a pasear al perro",
            descripcion: "Llevarlo al parque del vecindario",
            id: 1

        }, {
            trabajo: "Hacer la compra semanal",
            descripcion: "Realizar compra en el super del barrio ",
            id: 2

        }, {
            trabajo: "Reportaje fotografico",
            descripcion: "Concretar lugar donde realizarlo con el cliente",
            id: 3

        }, {
            trabajo: "Preguntar a Javier",
            descripcion: "Donde se compro esos adornos navideños",
            id: 4

        }

    ]);
    const añadeTareatr=
        {
            trabajo: "",
            descripcion:"",
            id: (Listados.length)+1
        }
    
    const accionaBoton = () => {
        if(añadeTareatr.trabajo!=="" && añadeTareatr.descripcion !==""){
         
        setListados([...Listados, añadeTareatr])
        document.getElementById("intTr").value="";
        document.getElementById("intDr").value="";   
    } else {alert("Debe rellenar todos campos.")}
        
    }
    // const elmiTarea = 
   
    

    return (
        <div className="container d-flex">
            <div className="container d-block">
                <div className="pt-2 w-75 d-flex justify-content-center" style={{ height: "80px" }}>
                    <h2>Listado de tareas</h2>
                </div>
                <div className="container d-block">
                    <ul className="list-group w-75">
                
                    
                        {
                            Listados.map((mandado,index) => {
                                return (
                                    <>
                                    <li className="list-group-item justify-content-between align-items-start w-5 border border-secondary" >
                                    <Tarea list={mandado} key={mandado.id} />
                                    <i className="fa-solid fa-trash" onClick={()=> setListados(Listados.filter((t, currentIndex)=> index !=currentIndex))}></i>
                                    </li>
                                    </>

                                )
                            })
                        }
                      
                    </ul>
                </div>


            </div>
           
            <div className=" d-block w-75 mt-5">
                <h5>Nueva tarea a añadir</h5>
                <div className="  text-center border border-primary w-75">
                    <p className="m-0"><strong>Titulo</strong></p>
                    <input type="text" id="intTr" onChange={(e)=>  añadeTareatr.trabajo=(e.target.value)}/>  
                    <p className="m-0"><strong>Breve descripcion</strong></p>
                    <input type="text" id="intDr" onChange={(e)=> añadeTareatr.descripcion=(e.target.value)}/>  
                    <button type="button" className="btn btn-success mt-2" onClick={accionaBoton}>Agregar tarea</button>
                    
                </div>
            </div>
           
         </div>);
}