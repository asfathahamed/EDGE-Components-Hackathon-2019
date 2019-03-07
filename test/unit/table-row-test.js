describe('Table Row', function () {
  const helpers = require('./support/helpers');
  const TableRow = require('../../src/table-row');

  function objectLength (obj) {
    return Object.keys(obj).length;
  }

  const data = {
    name: 'bob',
    occupation: 'steward',
    favoriteColor: 'blue'
  };

  it('creates a <td> for each element of supplied data object', function () {
    const tr = render(<TableRow data={data} />);
    const expectedTds = objectLength(data);

    const tds = TestUtils.scryRenderedDOMComponentsWithTag(tr, 'td');
    expect(tds.length).to.eql(expectedTds);
  });
});
