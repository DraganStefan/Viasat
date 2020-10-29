import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };
  }
  componentDidMount() {
    import("../images/" + this.props.icon).then((image) => {
      this.setState({ image: image.default });
    });
  }

  render() {
    return (
      <div className="card-container">
        <div className="service-icon">
          <img src={this.state.image} className="card-icon" alt="cardIcon" />
        </div>
        <div className="card-content">
          <div className="card-infos">
            <div className="card-title">{this.props.title}</div>
            <div className="card-description">{this.props.description}</div>
            <div className="card-description">{this.props.internet}</div>
          </div>
          <div className="card-footer">
            <div className="card-price">
              <span className="card-price-digits">{`${this.props.price}€`}</span>
              <span className="card-price-month">/MONTH</span>
            </div>
            <a href="#" className="card-select-button">
              SELECT
            </a>
          </div>
        </div>
      </div>
    );
  }
}
