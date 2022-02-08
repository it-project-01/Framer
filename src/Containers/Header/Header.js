import React, { Component } from "react";
import "./Header.css";
import { FaArrowDown, FaReact } from "react-icons/fa";
import { Button } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2 reactIcon text-center py-3">
            <FaReact />
          </div>
          <div className="col-12 col-lg-8 text-center py-3">
            <ul className="list-type-none justify-content-between">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#getStarted">Get started</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#enterprice">Enterprice</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 text-center py-2 headerButtonDiv">
            <Button color="primary" className="px-3 headerButton">
              <FaArrowDown className="me-2" />
              Free trial
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
