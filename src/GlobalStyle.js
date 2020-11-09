import { createGlobalStyle } from 'styled-components';
import bg from './images/bg.jpg';


export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #363636;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background: url(${bg}) fixed center top/cover no-repeat !important;

        h1 {
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--white;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 500;
        }

        p {
            font-size: var(--fontSmall);
            color: var(--white);
        }
    }

`;