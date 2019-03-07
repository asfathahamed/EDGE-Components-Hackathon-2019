import "./pagination.css";
import * as React from "react";
import * as PropTypes from "prop-types";
import { PageNumbers } from "../../atoms/PageNumbers";

/**
 * Pagination component will render first, last, back and next butons
 * will render pageNumber comonents for pagination
 *
 * @returns {*} a pagination component
 */
export class Pagination extends React.PureComponent {
  /**
   * Will store currentPage in local state
   */
  state = {
    currentPage: this.props.currentPage
  };

  /**
   * Will return the currentPage once component is updated
   */
  componentDidUpdate() {
    this.props.getCurrentPage(this.state.currentPage + 1);
  }

  /**
   * updateCurrentPage will handle all onChange events when user clicks
   * on first, last, back, next and onPage number click
   * 
   * @param {*} event - onClick event to read the target
   * @param {string} type - when button user has triggered 
   */
  updateCurrentPage(event, type) {
    const { currentPage } = this.state;
    const { numberOfPages } = this.props;
    switch (type) {
      case "first":
        this.setState({
          currentPage: 0
        });
        break;
      case "back":
        this.setState({
          currentPage: currentPage - 1
        });
        break;
      case "next":
        this.setState({
          currentPage: currentPage + 1
        });
        break;
      case "last":
        this.setState({
          currentPage: numberOfPages - 1
        });
        break;
      case "page":
        this.setState({
          currentPage: event.target.value
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      numberOfPages,
      showPages,
      showFirstLast,
      showText,
      className
    } = this.props;
    const { currentPage } = this.state;
    return (
      <div className={className}>
        {showFirstLast && (
          <div
            className={`buttons ${currentPage > 0 ? "show" : "hide"}`}
            onClick={event => this.updateCurrentPage(event, "first")}
          >
            {"<< "}
            {showText[0]}
          </div>
        )}
        <div
          className={`buttons ${currentPage > 0 ? "show" : "hide"}`}
          onClick={event => this.updateCurrentPage(event, "back")}
        >
          {"< "}
          {showText[1]}
        </div>
        <PageNumbers
          numberOfPages={numberOfPages}
          onClick={event => this.updateCurrentPage(event, "page")}
          currentPage={currentPage}
          showPages={showPages}
        />
        <div
          className={`buttons ${
            currentPage === numberOfPages - 1 ? "hide" : "show"
          }`}
          onClick={event => this.updateCurrentPage(event, "next")}
        >
          {showText[2]}
          {" >"}
        </div>
        {showFirstLast && (
          <div
            className={`buttons ${
              currentPage === numberOfPages - 1 ? "hide" : "show"
            }`}
            onClick={event => this.updateCurrentPage(event, "last")}
          >
            {showText[3]}
            {" >>"}
          </div>
        )}
      </div>
    );
  }
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
  getCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
  showFirstLast: PropTypes.bool,
  showPages: PropTypes.number,
  showText: PropTypes.array,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  numberOfPages: 10,
  getCurrentPage: () => {},
  currentPage: 0,
  showFirstLast: true,
  showPages: 10,
  showText: ["First", "Back", "Next", "Last"],
  className: "pagination-container",
};
