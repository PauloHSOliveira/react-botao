import styled from 'styled-components';

interface IButtonContainerProps {
  background: string;
  color: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  background: #000;
  color: #fff;
  outline: none;
  border: 0;
  padding: 12px 32px;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  gap: 8px;

  background: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
