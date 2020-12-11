import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthContext';

import getValidationErrors from '../../util/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

import logoImg from '../../assets/logo_jabuti.png';

interface SignInFormData {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('Entre com um Usuario'),
          password: Yup.string().required('Digite sua senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          user: data.user,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="JSM" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>

            <Input
              name="user"
              icon={FiUser}
              placeholder="Usuario"
              defaultValue="root"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
              defaultValue="toor"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha Senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
