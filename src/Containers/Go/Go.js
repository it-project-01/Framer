import React, { Component } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { InputGroup, Button, Input, Container } from "reactstrap";
import "./Go.css";

export default class Go extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="getText mb-4 text-align-center">
            Get ahead of the pack.
          </p>
          <h3 className="text-secondary mb-5">
            Framer is the best way to create interactive <br />
            designs from start to finish.
          </h3>
          <div className="inputGroup">
            <InputGroup>
              <Input placeholder="Email" />
              <Button color="primary">Start your free trial</Button>
            </InputGroup>
          </div>
          <div className="d-flex text-primary mt-5 align-items-center">
            <FaPlayCircle />
            <p className="ms-2 pt-3">Watch intro video</p>
          </div>
        </div>
      </div>
    );
  }
}
