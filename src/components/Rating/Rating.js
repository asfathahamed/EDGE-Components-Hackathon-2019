import * as React from "react";
import * as PropTypes from "prop-types";
import { RatingItem } from "../RatingItem/RatingItem";

/**
 * This component is used to generate rating item based on starCount length
 *
 * @param {number} starCount - array of start items
 * @param {func} onChange - this function is used to change the selected rating value.
 * @param {number} value - value of the rating item.
 *
 * @returns {*} a React Stateless Functional Component
 */
export const Rating = ({ starCount, onChange, value }) => (
  <div className="rating">
    {starCount.map(item => (
      <RatingItem
        colored={value >= item}
        checked={value === item}
        value={item}
        key={Math.random()}
        onChange={onChange}
      />
    ))}
  </div>
);

Rating.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};

Rating.defaultProps = {
  onChange: () => {},
  value: 1
};
