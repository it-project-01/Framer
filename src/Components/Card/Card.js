import "./Card.css";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className={`myCard ${this.props.className || "bg-dark"}`}>
        {this.props.children}
      </div>
    );
  }
}
