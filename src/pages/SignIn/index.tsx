import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.jpg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="JSM" />

      <form>
        <h1>Faça seu Logon</h1>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha Senha</a>
      </form>

      <a href="account">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
