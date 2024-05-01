import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["navy-900"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["orange-500"]};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`;
