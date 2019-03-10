import "./rating.css";
import * as React from "react";
import * as PropTypes from "prop-types";
import { Rating } from "../Rating/Rating";

/**
 * This component is used to generate stars based on lengt of the starCount
 *
 * @param {array} starCount - number of star required for rating component
 * @returns {*} a React Class Component
 */
export class ReviewRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    };
  }

  render() {
    return (
      <Rating
        onChange={rating => this.setState({ rating })}
        value={this.state.rating}
        starCount={this.props.starCount}
      />
    );
  }
}

ReviewRating.propTypes = {
  starCount: PropTypes.array
};

ReviewRating.defaultProps = {
  starCount: [1, 2, 3, 4, 5]
};
