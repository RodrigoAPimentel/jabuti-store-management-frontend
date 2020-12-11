import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignBackground from '../../assets/sign_background.jpg';

import { fontSecondaryColor, primaryColor } from '../../styles/commons';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;

  background: url(${SignBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 10px 0 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      height: 56px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      font-size: 20px;
      margin-top: 16px;
    }

    a {
      color: ${fontSecondaryColor};
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, `${fontSecondaryColor}`)};
      }
    }
  }

  > a {
    color: ${primaryColor};
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, `${primaryColor}`)};
    }
  }
`;
