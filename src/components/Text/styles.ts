import styled, { css } from 'styled-components';

import { ColorOptions } from '../types';

export type StyledParagraphProps = {
  weight: string;
  fontSize: string;
  fontColor: ColorOptions;
  lineHeight: string;
  variant: 'primary' | 'link';
};

const typeModifier = {
  primary: css`
    color: ${({ theme }) => theme.colors['brown-600']};
  `,
  link: css`
    color: ${({ theme }) => theme.colors['brown-500']};
    text-decoration-line: underline;

    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      opacity: 0.9;
    }
  `,
};

export const Paragraph = styled.div<StyledParagraphProps>`
  font-family: 'Josefin Sans';
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};

  ${({ variant = 'primary' }) => typeModifier[variant]}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;
