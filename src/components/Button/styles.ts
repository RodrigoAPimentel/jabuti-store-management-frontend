import styled from 'styled-components';
import { shade } from 'polished';

import { ButtonBackgroudColor, ButtonFontColor } from '../../styles/commons';

export const Container = styled.button`
  background: ${ButtonBackgroudColor};
  border-radius: 10px;
  color: ${ButtonFontColor};
  font-weight: 700;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, `${ButtonBackgroudColor}`)};
  }

  cursor: pointer;
`;
