const React = require('react');
const TableHeader = require('./table-header');
const constants = require('./constants');

module.exports = React.createClass({
  className: constants.moduleClass + '__' + constants.headClass,
  getDefaultProps: function () {
    return {
      columns: [],
      columnDisplay: {}
    };
  },
  handleHeadingClick: function () {
    if (this.props.clickHandler) {
      this.props.clickHandler.apply(null, arguments);
    }
  },
  renderHeader: function () {
    return this.props.columns.map(function (column) {
      const mappedValue = this.props.columnDisplay[column];
      return (
        <TableHeader
          clickHandler={this.props.handleHeadingClick}
          isActive={this.props.activeKey === column}
          sortKey={column}
          sortDirection={this.props.sortDirection}
          >
          {mappedValue ? mappedValue : column}
        </TableHeader>
      );
    }.bind(this));
  },
  render: function () {
    return (
      <thead className={this.className}>
        {this.renderHeader()}
      </thead>
    );
  }
});
