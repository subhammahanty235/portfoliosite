import React from "react";
import img1 from '../images/img3.svg'
import {NavLink} from 'react-router-dom'
function Card(props) {
    return (
        <>
           

            
                <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
                        <img src={props.image} class="card-img-top car-img" alt={props.image} />
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold text-center" >{props.title}</h5>
                            <p className="text-center p-2">{props.para}</p>
                            <NavLink to="/" class="btn btn-outline-primary sourcebtn">Get Source</NavLink>
                        </div>
                    </div>
                </div>
          

        </>
    );
}

export default Card;