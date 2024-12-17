import React from "react";

export const Tarea = ({list}) => {

    return(
        <div>
            <div className="ms-2 me-auto">
            <div className="fw-bold">{list.trabajo}</div>
           {list.descripcion}
        </div>
        {/* <span className="badge text-bg-primary rounded-pill me-3">Nº{list.id}</span> */}
         
    </div>
)}