const React = require('react');
const constants = require('./constants');

module.exports = React.createClass({
  className: constants.moduleClass + '__' + constants.trClass,
  getDefaultProps: function () {
    return {
      data: []
    };
  },
  renderRowData: function () {
    const tds = [];
    const trClass = constants.moduleClass + '__' + constants.tdClass;

    for (const td in this.props.data) {
      tds.push(
        <td className={trClass}>
          {this.props.data[td]}
        </td>
      );
    }

    return tds;
  },
  render: function () {
    const rowData = this.renderRowData();
    return (
      <tr className={this.className}>
        {rowData}
      </tr>
    );
  }
});
