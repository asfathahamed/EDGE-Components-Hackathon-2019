import * as React from 'react';
import { RatingItem } from '../RatingItem';
import { mount } from 'enzyme';

describe('RatingItem', () => {
  it('should render component', () => {
    const MountedRatingItem = mount(
      <RatingItem />,
    );
    const expected = MountedRatingItem.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
