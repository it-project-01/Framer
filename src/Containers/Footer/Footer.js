import React, { Component } from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCrosshairs } from "react-icons/fa";

class Column extends Component {
  render() {
    const {
      column: { colProps, title, list },
    } = this.props;
    return (
      <div className={`col-6 col-md-4 col-lg-2 mb-3` || { colProps }}>
        <p className="fw-bold text-white">{title}</p>
        {list.map((value, index) => {
          return (
            <a
              href={value.url}
              className={`d-block my-2 text-secondary d-flex align-items-center ${
                value.className || ""
              }`}
            >
              {value.icon}
              {value.title}
            </a>
          );
        })}
      </div>
    );
  }
}

export default class Footer extends Component {
  render() {
    const { colProps, data } = this.props;
    return (
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row">
            {data.map((column, index) => {
              return <Column column={column} key={index} colProps={colProps} />;
            })}
          </div>
          <div className="col-12 col-lg-3 text-align-center mx-5">
            <div className="d-flex text-secondary justify-content-between">
              <FaTwitter />
              <FaFacebook />
              <FaBasketballBall />
              <FaMailBulk />
              <FaYoutube />
              <FaCrosshairs />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
