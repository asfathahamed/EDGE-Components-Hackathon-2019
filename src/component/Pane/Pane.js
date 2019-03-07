import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export const Pane = ({ size, percentage, primary, vertical, children }) => {
  const unit = percentage ? '%' : 'px';
  const style = {};

  // if it's not primary pane then set height/width of the pane
  if (!primary) {
    if (vertical) {
      style.height = `${size}${unit}`;
    } else {
      style.width = `${size}${unit}`;
    }
  }
  return (
    <S.Container primary={primary} style={style}>
      {children}
    </S.Container>
  );
};

Pane.propTypes = {
  vertical: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.number,
  percentage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Pane.defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: []
};
