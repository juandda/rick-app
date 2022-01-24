import React from "react";
import'../styles/locationInfo.styles.css'


const LocationInfo = ({location}) =>{


    return(
        <div className="location-info">
                <div className="location-info-title">
                    <h2>{location?.name}</h2>
                </div>
                <div className="location-info-container">
                    <h3>{`Type: ${location?.type}`}</h3>
                    <h3>{`Dimension: ${location?.dimension}`}</h3>
                    <h3>{`Population: ${location.residents?.length}`}</h3>
                </div>
        </div>
    )
}


export default LocationInfo;