import * as React from 'react';
import { ReviewRating } from '../ReviewRating';
import { mount } from 'enzyme';

describe('ReviewRating', () => {
  it('should render component', () => {
    const MountedReviewRating = mount(
      <ReviewRating />,
    );
    const expected = MountedReviewRating.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
