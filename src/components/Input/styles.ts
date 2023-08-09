import { TextInput as InputComponent } from '@mantine/core';
import styled from 'styled-components';

export const Input = styled(InputComponent)`
  & .mantine-TextInput-input {
    border-radius: 12px;
    border-color: ${({ theme }) => theme.colors['yellow-100']};
    background-color: ${({ theme }) => theme.colors['yellow-100']};
    height: 50px;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors['brown-500']};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors['yellow-150']};
    }

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors['yellow-150']};
    }
  }
  & .mantine-TextInput-label {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors['brown-700']};
  }
`;
