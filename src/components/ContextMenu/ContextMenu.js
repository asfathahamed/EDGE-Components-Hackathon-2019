import React from 'react';

export class ContextMenu extends React.Component {
  state = {
    isShown: false,
    cursorX: 0,
    cursorY: 0
  };

  componentDidMount() {
    document.getElementById('children').addEventListener('contextmenu', this.menuEventHandler);
    document.addEventListener('click', this.clickEvent);
  }

  menuEventHandler = event => {
    event.preventDefault();

    this.setState({ isShown: true });

    this.setState({ cursorX: event.clientX });
    this.setState({ cursorY: event.clientY });
    console.log(
      this.state.isShown +
        '...' +
        this.state.cursorX +
        '..' +
        this.state.cursorY
    );
  };

  clickEvent = event => {
    this.setState({ isShown: false });
  };
  handleClick(e) {
    const { onSelect } = this.props;
    if (onSelect) onSelect(e);
  }

  render() {
    var display = {
      position: 'fixed',
      display: this.state.isShown ? 'block' : 'none',
      left: this.state.cursorX + 'px',
      top: this.state.cursorY + 'px'
    };
    return (
      <div>
        <span id="children">{this.props.children}</span>

        <div style={display} className='dropdown-menu'>
          {this.props.contextMenuItems.map(menuItem => (
            <div
              key={`key-${menuItem}`}
              name='items'
              value={menuItem}
              className='dropdown-item'
              onClick={() => this.handleClick(menuItem)}
            >
              {menuItem}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
