import "./Bigsection.css";
import React, { Component } from "react";
import { Button } from "reactstrap";

export default class BigSection extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="text-white py-5">
          <p className="bigFramer my-4">Framer is for teams, too.</p>
          <h4 className="joinClass">
            Join a growing list of companies who use Framer <br />
            to make all the products you know and love.
          </h4>
          <div className="d-flex justify-content-center">
            <Button color="light" className="fw-bold text-align-center">
              Learn about Enterprise
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
