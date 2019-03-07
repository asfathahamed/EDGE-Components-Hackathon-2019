import * as React from 'react';
import { PageNumbers } from '../PageNumbers';
import { mount } from 'enzyme';

describe('PageNumbers', () => {
  it('should render component', () => {
    const MountedPageNumbers = mount(
      <PageNumbers />,
    );
    const expected = MountedPageNumbers.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
