import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface TitleProps extends BaseHTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
}

const Title = ({ children, leftIcon }: TitleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.LeftIncon>{leftIcon}</Styled.LeftIncon>
      <Styled.Title>{children}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Title;
