import React from "react";
import "./Checkbox.css";

class Checkbox extends React.Component {
  render() {
    return (
      <label className="checkbox-container w-full flex items-baseline text-xs text-gray-dark">
        {this.props.text}
        <input
          name={this.props.name}
          checked={this.props.checked}
          type="checkbox"
          className="mr-2"
          onChange={this.props.handleInputChange}
        />
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Checkbox;
