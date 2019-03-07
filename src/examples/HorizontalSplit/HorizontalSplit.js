import React from 'react';
import { Splitter } from '../../component/Splitter';

export const HorizontalSplit = () => (
  <Splitter style={{ padding: 20 }}>
    <div>
      <h2>1st Pane</h2>
      <p>This is the 1st pane, and this is the primary pane by default.</p>
      <p>
        Try to resize the window and see how secondary pane&apos;s size keeps.
      </p>
      <pre>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </pre>
    </div>
    <div>
      <h2>2nd Pane</h2>
      <p>This is the 2nd pane, and this is the secondary pane by default.</p>
      <p>
        Try to resize the window and see how secondary pane&apos;s size keeps.
      </p>
      <pre>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </pre>
    </div>
  </Splitter>
);
