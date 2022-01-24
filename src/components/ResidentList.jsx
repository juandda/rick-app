import React from "react";
import ResidentInfo from "./ResidentInfo";
import '../styles/residentList.styles.css'

const ResidentList = ({location}) =>{
    return(
        <div className="list-container">
            {location.residents?.map((resident) =>(
                <ResidentInfo url={resident} key={resident}/>               
            ))}
        </div>
    )
}

export default ResidentList;