import styled, { css } from 'styled-components';

import {
  InputBackgroundColor,
  InputPlaceholderColor,
  InputFontColor,
  BorderColorFocus,
  BorderColorError,
} from '../../styles/commons';

import Tooltip from '../../util/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${InputBackgroundColor};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 3px solid #232129;
  color: ${InputPlaceholderColor};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${BorderColorError};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${BorderColorFocus};
      color: ${BorderColorFocus};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${BorderColorFocus};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${InputFontColor};

    &::placeholder {
      color: ${InputPlaceholderColor};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
