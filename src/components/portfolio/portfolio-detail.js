import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

// banner_image_url// : // null
// category// : // "Enterprise"
// column_names_merged_with_images// : // (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
// description// : // "gfasgdas"
// id// : // 42397
// logo_url// : // null
// name// : // "test401"
// position// : // -1
// thumb_image_url// : // "https://devcamp-space.s3.amazonaws.com/C2zWpAQnTqHstLnJaY2dwvu2?response-content-disposition=inline%3B%20filename%3D%2253426336314_9d3c1cb3cf_o.jpg%22%3B%20filename%2A%3DUTF-8%27%2753426336314_9d3c1cb3cf_o.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20240814%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240814T192720Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=7747cb78ec7f5559b8059afc6bc46c0da3539a97a5ac137eb298bc1bb41ae811"
// url// : // "https://www.yr.no/

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios.get(`https://denmcnabb.devcamp.space/portfolio/portfolio_items/${
      this.props.match.params.slug
    }`, 
    {withCredentials: true}
  ).then(response => {
    this.setState({
          portfolioItem: response.data.portfolio_item
        });
  })
  .catch(error => {
    console.log("getportfolioitem error", error);
    });
  }

  render() {
    const {
      banner_image_url,
      category, 
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")", 
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat", 
      backgroundPosition: "center center"
    }

    const logoStyles = {
      width: "30vw"
    }

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-descriptioin-wrapper">
          <div className="descriptioin">
            {description}
          </div>

          <div className="bottom-content-wrapper">
            <a href={url} className="site-link" target="_blank" >
              Visit {name}
            </a>
          </div>

        </div>
      </div>
    );
  }   
}

