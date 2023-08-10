/* eslint-disable react/no-array-index-key */
import React, { BaseHTMLAttributes, ReactNode } from 'react';

import { Mail } from 'tabler-icons-react';

import Button from '../Button';
import Grid from '../Grid';
import Input from '../Input';
import PhoneInput from '../PhoneInput';
import Title from '../Title';
import * as Styled from './styles';

export interface TabDetailsProps extends BaseHTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
}

const TabDetails = ({ children }: TabDetailsProps) => {
  return (
    <Styled.TabDetails>
      <Styled.Title>
        <Title leftIcon={<Mail />}>Informações pessoais</Title>
      </Styled.Title>

      <Styled.Form>
        <Grid justify="center" align="center">
          <Grid.Col span={4}>
            <Input name="Nome" label="Nome" placeholder="Leonardo" />
          </Grid.Col>
          <Grid.Col span={4}>
            <Input
              name="Nome"
              label="Email"
              type="email"
              placeholder="mail@mail.com"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <PhoneInput label="Celular" placeholder="9104877648" />
          </Grid.Col>
        </Grid>
      </Styled.Form>

      <Styled.Title>
        <Title leftIcon={<Mail />}>Endereço padrão de entrega</Title>
      </Styled.Title>

      <Styled.Form>
        <Grid justify="center" align="center">
          <Grid.Col span={4}>
            <Input name="CEP" label="cep" placeholder="07114-420" />
          </Grid.Col>
          <Grid.Col span={4}>
            <Input name="rua" label="Rua" placeholder="Rua João Bueno" />
          </Grid.Col>
          <Grid.Col span={3}>
            <Input label="Bairro" placeholder="Jardim Barbosa" />
          </Grid.Col>
          <Grid.Col span={1}>
            <Input label="Número" placeholder="00" />
          </Grid.Col>

          <Grid.Col span={7}>
            <Input
              name="complemento"
              label="Complemento"
              placeholder="Apt. 7"
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Input label="Cidade" placeholder="Guarulhos" />
          </Grid.Col>
          <Grid.Col span={2}>
            <Styled.Button>
              <Button variant="save">Salvar</Button>
            </Styled.Button>
          </Grid.Col>
        </Grid>
      </Styled.Form>
    </Styled.TabDetails>
  );
};
export default TabDetails;
