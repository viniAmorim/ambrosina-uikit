import React, { BaseHTMLAttributes, forwardRef, ReactNode } from 'react';

import * as Styled from './styles';

export interface ParagraphProps
  extends BaseHTMLAttributes<HTMLParagraphElement>,
    Partial<Styled.StyledParagraphProps> {
  children: ReactNode;
  onClick?: () => void;
}

const Text = forwardRef<HTMLParagraphElement, ParagraphProps>(function Text(
  {
    children,
    weight = '700',
    fontSize = '24px',
    fontColor = 'black700',
    lineHeight = '34px',
    variant = 'primary',
    onClick,
    ...rest
  },
  ref,
) {
  return (
    <Styled.Paragraph
      weight={weight}
      fontSize={fontSize}
      fontColor={fontColor}
      lineHeight={lineHeight}
      variant={variant}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {children}
    </Styled.Paragraph>
  );
});

export default Text;
