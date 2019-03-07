const React = require('react');
const constants = require('./constants');

module.exports = React.createClass({
  className: constants.moduleClass + '__' + constants.thClass,
  getDefaultProps: function () {
    return {
      isActive: false,
      sortDirection: 'ascending'
    };
  },
  handleClick: function () {
    if (this.props.clickHandler) {
      this.props.clickHandler({
        sortKey: this.props.sortKey
      });
    }
  },
  getClassName: function () {
    const activeClass = this.props.isActive ?
      this.className + '--' + this.props.sortDirection : '';
    return [this.className, activeClass].join(' ');
  },
  render: function () {
    return (
      <th
        onClick={this.handleClick}
        className={this.getClassName()}
        >
        {this.props.children}
      </th>
    );
  }
});
