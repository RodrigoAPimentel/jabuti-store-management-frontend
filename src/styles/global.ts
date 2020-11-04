import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import {
  BackgroudColor,
  FontColor,
  FontFamily,
  InputBackgroundColor,
  InputFontColor,
  InputPlaceholderColor,
  ButtonBackgroudColor,
  ButtonFontColor,
} from './commons';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: ${BackgroudColor};
        color: ${FontColor};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: ${FontFamily};
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 800;
    }
`;
