import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
        // DATA THET WE'LL NEED 
      // - background image: thumb_image_url
      // - logo 
      // - description: description
      // - id

      constructor(props) {
        super(props);

        this.state = {
          PortfolioItemClass: ""
        };
      }

      handleMouseEnter() {
        this.setState({ PortfolioItemClass: "image-blur"});

      }

      handleMouseLeave() {
        this.setState({ PortfolioItemClass: ""});

      }


      render() {
      const {id, description, thumb_image_url, logo_url} = this.props.item;
      return (
        <Link to={`/portfolio/${id}`}>     
    <div 
      className="portfolio-item-wrapper"
      onMouseEnter={() => this.handleMouseEnter()}
      onMouseLeave={() => this.handleMouseLeave()}
      >
      {/* <h1>{this.state.PortfolioItemClass}</h1> */}

      <div
        className={"portfolio-img-background " + this.state.PortfolioItemClass}
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
        />
      


      {/* <img src={logo} />
      <h3>title.... {props.title}</h3>
      <h4>url...{props.url}</h4>
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link> */}

      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url}/>
        </div>
        <div className="subtitle">{description}</div>

      </div>



      </div>
      </Link>

    );
  }

}