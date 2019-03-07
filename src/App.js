import React from 'react';
import { ContextMenu } from './components/ContextMenu';

const onSelectHandler = e => {
  alert(e);
};

export const App = () => (
  <div>
    <ContextMenu
      contextMenuItems={['Option 1', 'Option 2', 'Option 3']}
      onSelect={onSelectHandler}
    >
      this is context menu
    </ContextMenu>
  </div>
);
