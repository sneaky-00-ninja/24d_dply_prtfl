import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import zapped from "../../../static/assets/images/bio/zap.png";


import BlogModal from "../modals/blog-modal"; // testing it

export default function() {
  return (
    <div>


      <h2>Contact</h2>

      <div>
        <Link to="/about-me">Read more about myself</Link>
      </div>

      <div className="content-page-wrapper">
        <div 
        className="left-column"
        style={{
          background: "url(" + zapped + ") no-repeat", 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}>


          
        </div>
        <div className="right-column">
          <div className="contact-bullet-points">

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>

              <div className="text">
                phone 555-123-1234
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>

              <div className="text">
                123jump@nojumping.com
              </div>
            </div> 

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>

              <div className="text">
                Earth
              </div>
            </div> 

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>

              <div className="text">
                phone 555-123-1234
              </div>
            </div> 

          </div>
        </div>
      </div>


    </div>
  );
}