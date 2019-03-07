import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: ${props => (!props.primary ? '0 0 auto' : '1 1 auto')};
  overflow: auto;
`;
