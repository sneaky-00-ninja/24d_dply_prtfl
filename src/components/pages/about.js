import React from "react";
import zap from "../../../static/assets/images/bio/zap.jpg";

// import Zap from "../auth/login";


export default function() {
  return  (
    <div>
      <h2>About</h2>
    
      <div className="content-page-wrapper">
        <div 
        className="left-column"
        style={{
          background: "url(" + zap + ") no-repeat", 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}>


          {/* <div className="left-image"
          style={{
            backgroundImage: `url(${zap})`,
          }}
          >
            
          </div> */}

          
        </div>
          <div className="right-column">
              right right right right right 
              right right right right         right right right right right 
              right right right right         right right right right right 
              right right right right         right right right right right 
              right right right right         right right right right right 
              right right right right         right right right right right 
              right right 
          </div>
      </div>


    </div>
  )
}