import React, { Component } from "react";
import "./Cards.css";
import { Button } from "reactstrap";
import Card from "../../Components/Card";

export default class Cards extends Component {
  render() {
    return (
      <div className="row m-0 p-0">
        <div className="col-md-6 p-0">
          <Card className="bg-primary">
            <h1>Why Framer</h1>
            <h5 className="my-4">
              Easily bring designs to life with code, then share them with
              teammates.
            </h5>
            <Button className="me-2 px-4 mt-2" color="light">
              <span className="text-secondary">See Features</span>
            </Button>
            <Button className="px-4 mt-2" color="secondary">
              Get Started
            </Button>
          </Card>
        </div>
        <div className="col-md-6 p-0">
          <Card className="bg-dark">
            <h1>Subscribe Today</h1>
            <h5 className="my-4">
              Get 20% off when you choose our yearly subscription plan.
            </h5>
            <Button className="px-4 mt-2" color="secondary">
              View Pricing
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
