import React from "react";
import img2 from '../images/img2.webp'
import {NavLink} from 'react-router-dom'

// const f = useContext(First);
function Common(props) {
    
    return (
      <>
          <section id="header"  className="d-flex align-items-center " >
                <div  className="container-fluid  ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                            <div  lassName="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title}
                                       <br /> <strong className="brandname"> Subham Mahanty</strong></h1>
                                    <h4 className="my-3">{props.para}</h4>
                                    <div className="mt-3">
                                        <NavLink to={props.link} className="btn-get-started">{props.btntext}</NavLink>
                                    </div>
                            </div>
                            <div className="col-6 my-5 order-1 order-lg-2 header-img " >
                                <img src={props.img} alt="img" className="img-fluid animated image" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="wave one"></div>
                <div className="wave two"></div>
                <div className="wave three"></div>
          </section>
      </>
    );
  }
  
  export default Common;
  
