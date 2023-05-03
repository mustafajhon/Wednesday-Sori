import "./sample.css";
import React, { Component } from "react";
class Sample extends Component {
  state = {
    count: 3,
    tags: ["Ali", "Naib", "Yosuf", "Mustafa", "Sahil"],
  };
  render() {
    return (
      <>
        <div className="sample">
          <button className={this.btnClass()}>{this.btnZero()}</button>
          <button onClick={this.increasBtn} className="btn btn-sm btn-danger">
            Increament
          </button>
        </div>
        {this.listExist()}
      </>
    );
  }

  listExist() {
    if (this.state.tags.length === 0) return <h2>There are NO list Exist!</h2>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  btnZero() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  btnClass() {
    let classes = "btn btn-sm btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  increasBtn() {
    this.setState(this.state.count + 1);
  }
}

export default Sample;
