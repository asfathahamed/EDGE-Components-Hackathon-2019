import * as React from "react";
import * as PropTypes from "prop-types";

/**
 * This component is used to generate rating Item
 *
 * @param {bool} checked - selected rating item
 * @param {func} onChange - is used to update the elected rating item
 * @param {number} value - value of the rating item
 * @param {bool} colored - is used to update the color of the rating component
 *
 * @returns {*} a React Stateless Functional Component
 */
export const RatingItem = ({ checked, onChange, value, colored }) => (
  <label className={`ratingItem ${colored ? "ratingItemSelected" : ""}`}>
    <input
      checked={checked}
      className="ratingInput"
      onChange={e => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
);

RatingItem.propTypes = {
  checked: PropTypes.bool,
  colored: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.number
};

RatingItem.defaultProps = {
  checked: false,
  colored: false,
  onChange: () => {},
  value: 0
};
