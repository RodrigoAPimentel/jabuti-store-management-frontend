import React, { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../util/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

import logoImg from '../../assets/logo_jabuti.png';

interface SignUpFormData {
  name: string;
  user: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          user: Yup.string().required('Usuario Obrigatório'),
          email: Yup.string()
            .required('E-Mail Obrigatório')
            .email('Digite um E-Mail válido'),
          password: Yup.string().min(3, 'A senha deve ter no minimo 3 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');

        await api.post('users', {
          ...data,
          permission_level: 'level',
          permission_group: 'group',
        });

        toast.success(`Usuario ${data.user} adicionado com Sucesso !!!!!`);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        toast.error('Ocorreu um error ao Criar Usuario');
      }
    },
    [history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="JSM" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="user" icon={FiUser} placeholder="Usuario" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
