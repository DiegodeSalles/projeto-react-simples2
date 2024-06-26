import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const DefaultCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-content: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${(props) => props.theme["slate-500"]};
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["orange-300"]};
  }
`;

export const StartCountdownButton = styled(DefaultCountdownButton)`
  background: ${(props) => props.theme["orange-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["orange-300"]};
  }
`;
export const StopCountdownButton = styled(DefaultCountdownButton)`
  background: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["slate-700"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-400"]};
  }
`;
