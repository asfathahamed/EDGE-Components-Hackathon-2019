import * as React from 'react';
import { Rating } from '../Rating';
import { mount } from 'enzyme';

describe('Rating', () => {
  it('should render component', () => {
    const MountedRating = mount(
      <Rating />,
    );
    const expected = MountedRating.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
