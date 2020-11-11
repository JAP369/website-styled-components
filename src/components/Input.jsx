import styled from 'styled-components';

export const BasicInput = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'enter value',
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
