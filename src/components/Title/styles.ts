import { Title as TitleComponent } from '@mantine/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Title = styled(TitleComponent)`
  color: ${({ theme }) => theme.colors['brown-700']};
  text-align: center;
  margin-top: 10px;
  font-family: Josefin Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LeftIncon = styled.div`
  margin-right: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors['brown-700']};
`;
