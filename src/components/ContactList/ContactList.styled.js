import { styled } from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 20px;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 40px;
    padding-left: 10px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: transform 0.15s linear;
    &:hover {
      transform: scale(1.08);
      box-shadow: 1px 1px 6px #00d8ff;
    }
    &:hover button {
      opacity: 1;
    }

    button {
      font-size: 20px;
      color: red;
      background-color: transparent;
      opacity: 0;
      &:hover {
        background-color: transparent;
        border: 0;
        border-color: transparent;
      }
    }
  }
`;

export default List;
