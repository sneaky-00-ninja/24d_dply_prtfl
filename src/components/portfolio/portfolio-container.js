import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    console.log("BLING.. portfolio container has been rendered");

    this.state = {
      pageTitle: "Welcome 2 my PORTfolioioioioioioiooo",
      isLoading: false,
      data: []
      // { title: "first thing", ID:100 },
      // { title: "secondsist thing", ID:200 },
      // { title: "tercero thing", ID:300 },
      // { title: "numFour thing", ID:400 },
    };
    



    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {  
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://denmcnabb.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
          
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
            eCommerce
          </button>
          <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
            Scheduling
          </button>
          <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
            Enterprise_
            asdfasdf
          </button>          
          <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
            All            
          </button>
        </div>

        <div className="portfolio-items-wrapper">

          {this.portfolioItems()}

          {/* <div>
            <h1>This TEST.,., is the PORTFOLIO CONTAINER text, asdfasdf.</h1>
            <h2>{this.state.pageTitle}</h2>
            {this.portfolioItems()}
            </div> */}
        </div>
      </div>

    )
  }
}
