import styled from 'styled-components';

export default styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
