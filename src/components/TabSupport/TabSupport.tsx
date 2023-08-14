/* eslint-disable react/no-array-index-key */
import React, { BaseHTMLAttributes, ReactNode } from 'react';

import { Mail } from 'tabler-icons-react';

import Divider from '../Divider';
import Grid from '../Grid';
import Text from '../Text';
import Title from '../Title';
import * as Styled from './styles';

export interface TabSupportProps extends BaseHTMLAttributes<HTMLTitleElement> {
  children?: ReactNode;
}

const TabSupport = ({ children }: TabSupportProps) => {
  return (
    <Styled.TabSupport>
      <Styled.Title>
        <Title leftIcon={<Mail />}>Perguntas frequentes</Title>
      </Styled.Title>

      <Styled.Questions>
        <Grid justify="center" align="center">
          <Grid.Col span={6}>
            <Text variant="link">Quais são as formas de pagamento ?</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text variant="link">Para o que servem os pontos ?</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text variant="link">
              Qual o processo de compra até entrega do pedido ?
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text variant="link">
              Como funciona o sistema de compra de cupons?
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text variant="link">Como funciona as entregas?</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text variant="link">Como ganho pontos?</Text>
          </Grid.Col>
        </Grid>
      </Styled.Questions>

      <Grid justify="center" align="center">
        <Divider w="240px" h="1px" />
      </Grid>

      <Grid justify="center" align="center">
        <Title>Suas dúvidas não foram respondidas ?</Title>
      </Grid>

      <Grid justify="center" align="center">
        <Title>Entre em contato conosco!</Title>
      </Grid>
    </Styled.TabSupport>
  );
};

export default TabSupport;
