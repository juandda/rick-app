import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/residentInfo.styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const ResidentInfo = ({url}) =>{
    
    const[resident, setResident] = useState({})

    useEffect(() =>{
        axios.get(url).then((res) => setResident(res.data));     
    },[url]) 
    
   
    return(
        <div className="resident-info-container">
            <div className="resident-info-image">
                <img src={resident?.image} alt="" />
            </div>
            <div className="resident-info-details">
                <h4>{resident?.name}</h4>
                <h5><span>Status:</span> <FontAwesomeIcon icon={faCircle} 
                className={resident.status === "Alive"?'icon-alive':'icon-dead'&& resident.status === "Dead" ? "icon-dead":"icon" && resident.status === "unknown" ? "icon":"icon-alive"}/> {resident?.status}</h5>
                <h5><span>Origin:</span> {resident.origin?.name}</h5>
                <h5><span>Episodes where appear:</span> {resident.episode?.length}</h5>
            </div>
        </div>
    )
}

export default ResidentInfo;