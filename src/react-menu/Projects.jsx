import React from "react";
import Data from "./Data";
import Card from "./Card";
function Projects() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Projects</h1>
        <hr />
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
              {
                Data.map((ele , index)=>{
                    return <Card key={index} title = {ele.title} image={ele.img} para={ele.para}/>
                })
              }
              {/* <Card/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

