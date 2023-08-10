import styled, { css } from 'styled-components';

export type WrapperProps = {
  hasError: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  & .selected-flag {
    &:focus {
      background-color: ${({ theme }) => theme.colors['yellow-100']};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors['yellow-100']};
    }
  }

  & .flag-dropdown {
    background-color: ${({ theme }) => theme.colors['yellow-100']};
    border-radius: 12px 0px 0px 12px;
    border-color: ${({ theme }) => theme.colors['yellow-150']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['brown-500']};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors['yellow-150']};
      background-color: ${({ theme }) => theme.colors['yellow-100']};
    }

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors['yellow-150']};
      background-color: ${({ theme }) => theme.colors['yellow-100']};
    }
  }

  & .react-tel-input input {
    border-radius: 12px;
    border-color: ${({ theme }) => theme.colors['yellow-150']};
    background-color: ${({ theme }) => theme.colors['yellow-100']};
    height: 47px;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors['brown-500']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors['yellow-250']};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors['yellow-150']};
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border: 1px solid #fa5252;
        color: #fa5252;

        &::placeholder {
          color: #fa5252;
          opacity: 1;
        }
      `}
  }
`;

export const RequiredWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Required = styled.p`
  margin: 0;
  font-family: 'Helvetica';
  color: #fa5252;
`;

export const Label = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors['brown-700']};
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Error = styled.p`
  font-family: 'Helvetica';
  font-size: 12px;
  line-height: 1.2;
  color: #fa5252;
  margin-top: 4px;
  margin-bottom: 0;
`;
