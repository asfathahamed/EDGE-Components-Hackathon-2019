describe('Table Header', function () {
  const helpers = require('./support/helpers');
  const TableHeader = require('../../src/table-header');

  function renderHeader (header) {
    const table = render(
      <table>
        {header}
      </table>
    );

    return TestUtils.findRenderedComponentWithType(table, TableHeader);
  }

  it('renders a table header', function () {
    const header = renderHeader(<TableHeader />);
    expect(header.getDOMNode().tagName).to.eql('TH');
  });

  it('calls clickHandler prop an event when it is clicked', function () {
    const mock = sandbox.spy();
    const header = renderHeader(<TableHeader clickHandler={mock}/>);

    helpers.click(header.getDOMNode());

    expect(mock).to.have.been.called;
  });

  it('calls clickHandler with the value of its props', function () {
    const mock = sandbox.spy();
    const header = renderHeader(
        <TableHeader
          sortKey="name"
          clickHandler={mock}
        />
    );

    helpers.click(header.getDOMNode());

    expect(mock).to.have.been.calledWith({
      sortKey: 'name'
    });
  });

  it('adds a className based on its sort order', function () {
    const header = renderHeader(<TableHeader />);
    const expectedClassName = header.getClassName();

    TestUtils.findRenderedDOMComponentWithClass(header, expectedClassName);
  });

  it('defaults to inactive', function () {
    const header = renderHeader(<TableHeader />);

    expect(header.props.isActive).to.eql(false);
  });

  it('adds an active class if props.isActive is true', function () {
    const header = renderHeader(
      <TableHeader
        isActive
        sortDirection="descending"
      />
    );
    const expectedClassName = header.getClassName();

    TestUtils.findRenderedDOMComponentWithClass(header, expectedClassName);
  });

  it('adds does not add an active class if props.isActive is false', function () {
    const sortDirection = 'descending';
    const header = renderHeader(
      <TableHeader
        isActive={false}
        sortDirection={sortDirection}
      />
    );
    const expectedClassName = header.getClassName();

    expect(expectedClassName).to.not.contain(sortDirection);
    TestUtils.findRenderedDOMComponentWithClass(header, expectedClassName);
  });
});
