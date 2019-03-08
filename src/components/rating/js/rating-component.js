import React, { Component } from "react";
import $ from "jquery";
import "./rating-lib.js";
import "../css/rating-component.css";

class RatingComponent extends Component {
  selectCallback = (value, text) => {
    this.props.selectionCallback(value, text);
  };

  componentDidMount() {
    var elementIdentifier = `.rating-wrapper-${this.props.name}`;
    $(elementIdentifier).barrating({
      theme: this.props.theme,
      reverse: this.props.reverse,
      showValues: this.props.showValues,
      showSelectedRating: this.props.showSelectedRating,
      onSelect: (value, text, event) => {
        if (typeof event !== "undefined") {
          this.selectCallback(value, text);
        }
      }
    });
  }

  render() {
    return (
      <select className={`rating-wrapper-${this.props.name}`}>
        {this.props.children}
      </select>
    );
  }
}

export default RatingComponent;
