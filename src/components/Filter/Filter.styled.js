import { styled } from 'styled-components';

const Input = styled.input`
  width: 400px;
  font-size: 1.2rem;
  padding: 8px;
  border: 1px solid;
  border-radius: 6px;
  &:placeholder-shown {
    font-size: 1.2rem;
  }
`;

export default Input;
