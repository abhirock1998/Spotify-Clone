import styled from "styled-components/macro";

export const RoundedBorder = styled.a`
  background: ${({ background }) =>
    background !== "" ? "rgb(58, 88, 151)" : " rgb(29, 185, 84)"};
  color: ${({ color }) => (color === "" ? "black" : "white")};
  width: 100%;
  height: 50px;
  display: flex;
  object-fit:contain;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 500px;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.7;

    transform: scale(1.1, 1.1);
    touch-action: manipulation;
    transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow,
      filter, transform;
  }
`;
