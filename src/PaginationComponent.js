import "./pagination-component.css";
import React, { Component } from "react";
import { Pagination } from "./components/molecules/Pagination/Pagination";

/**
 * PaginationComponent will render different types of pagination
 * componets, pagination components accepts all this props
 *
 * @param {number} numberOfPages: total number of pages,
 * @param {function} getCurrentPage: will return the current page index,
 * @param {number} currentPage: default page to be selected on onLoad,
 * @param {bool} showFirstLast: if true will show first and last option else no,
 * @param {number} showPages: how many pages to be rendered in UI,
 * @param {array} showText: ["First", "Back", "Next", "Last"] can pass any text for
 * first,last,back and next.
 * @param {string} className: can pass ant string to write our own CSS,
 * @returns {*} return pagination component
 */
class PaginationComponent extends Component {
  /**
   * getCurrentPage will return curentPageIndex
   */
  getCurrentPage(value) {
    // console.log(value);
  }
  render() {
    return (
      <React.Fragment>
        <Pagination
          getCurrentPage={value => this.getCurrentPage(value)}
          numberOfPages={30}
          currentPage={2}
          showFirstLast={false}
          showPages={5}
          showText={[]}
          className={"circle-theme"}
        />
        <Pagination
          getCurrentPage={value => this.getCurrentPage(value)}
          numberOfPages={30}
          currentPage={4}
          showPages={10}
          showText={["First", "Back", "Next", "Last"]}
          className={"pagination-container"}
        />
        <Pagination
          getCurrentPage={value => this.getCurrentPage(value)}
          numberOfPages={30}
          currentPage={7}
          showPages={15}
          showText={[]}
          className={"pagination-container"}
        />
      </React.Fragment>
    );
  }
}

export default PaginationComponent;
