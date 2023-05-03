import "./home.css";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handIncreament = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        <div className="home">
          <button className={this.ClassColor()}>{this.formatCoount()}</button>
          <button
            onClick={() => this.handIncreament()}
            className="btn m-2 btn-sm btn-secondary"
          >
            Increment
          </button>

          <button
            onClick={this.props.onDelete}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  ClassColor() {
    let Classes = "btn btn-sm m-2 btn-";
    Classes += this.state.value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCoount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
