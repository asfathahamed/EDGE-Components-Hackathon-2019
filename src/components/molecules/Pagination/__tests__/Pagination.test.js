import * as React from 'react';
import { Pagination } from '../Pagination';
import { mount } from 'enzyme';

describe('Pagination', () => {
  it('should render component', () => {
    const MountedPagination = mount(
      <Pagination />,
    );
    const expected = MountedPagination.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
