import styled from 'styled-components';
import { DEFAULT_SPLITTER_SIZE } from '../../constants';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  cursor: ${({ vertical, resizing }) => {
    if (resizing && vertical) {
      return 'row-resize';
    }
    if (resizing) {
      return 'col-resize';
    }
    return 'inherit';
  }};
`;

export const Devider = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.vertical ? '100%' : `${DEFAULT_SPLITTER_SIZE}px`)};
  height: ${props => (props.vertical ? `${DEFAULT_SPLITTER_SIZE}px` : '100%')};
  cursor: ${props => (props.vertical ? 'row-resize' : 'col-resize')};
  background-color: #ccc;
  &:hover {
    background-color: #bbb;
  }
`;
