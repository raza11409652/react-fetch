import React from 'react';

const Beer = ({title , tagline , image , description , first_brewed , brewers_tips})=>{
    return(
        <div className="col-lg-6">
            <div className="card m-1">
                <div className="card-header text-primary">{title}
                <span className="float-right text-dark">First Brewed {first_brewed}</span>
                </div>
                <div className="card-body d-flex">
                    <img src={image} alt="Not found" className="beer-image-holder"></img>
                    <div className="m-3"><h4 className="text-danger">{tagline}</h4>
                    <p>{description}</p>
    <span className="text-small">{brewers_tips}</span>
                    </div>
    
                </div>
            </div>
        </div>
    ) ; 
} ; 
export default Beer;