describe('TableHead', function () {
  const TableHead = require('../../src/table-head');
  const TableHeader = require('../../src/table-header');
  const helpers = require('./support/helpers');

  function queryHeadings (Component) {
    return TestUtils.scryRenderedComponentsWithType(Component, TableHeader);
  }

  it('renders a TableHeader element for each item in the columns prop', function () {
    const head = render(<TableHead columns={fixtures.headings} />);
    const headings = queryHeadings(head);

    expect(headings.length).to.eql(fixtures.headings.length);
  });

  it('calls clickHandler handler when TableHeader is clicked', function () {
    const mockHandler = sandbox.spy();
    const head = render(
      <table>
        <TableHead
          handleHeadingClick={mockHandler}
          sortKey={'foo'}
          columns={fixtures.headings}
        />
      </table>
    );

    const secondHeading = queryHeadings(head)[1].getDOMNode();
    helpers.click(secondHeading);

    expect(mockHandler).to.have.been.called;
  });

  it('remaps table header display if object is passed in', function () {
    const display = {
      'heading1': 'first heading',
      'heading2': 'second heading',
      'heading3': 'third heading'
    };
    const head = render(
      <table>
        <TableHead
          sortKey="foo"
          columns={fixtures.headings}
          columnDisplay={display}
        />
      </table>
    );

    const secondHeadingNode = queryHeadings(head)[1].getDOMNode();
    expect(secondHeadingNode.textContent).to.eql('second heading');
  });

  it('uses the column name as the header display if no mapping is given', function () {
    const display = {
      'heading1': 'first heading',
    };
    const head = render(
      <table>
        <TableHead
          sortKey="foo"
          columns={fixtures.headings}
          columnDisplay={display}
        />
      </table>
    );

    const headings = queryHeadings(head);
    const firstHeadingNode = headings[0].getDOMNode();
    const secondHeadingNode = headings[1].getDOMNode();

    expect(firstHeadingNode.textContent).to.eql('first heading');
    expect(secondHeadingNode.textContent).to.eql(fixtures.headings[1]);
  });
});
