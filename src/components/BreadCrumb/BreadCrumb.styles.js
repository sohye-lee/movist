import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 13vh;
    background-color: transparent;
    padding: 100px 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    @media screen and (max-width: 768px) {
        padding-left: 50px;
    }

    @media all and (max-width: 400px) {
        padding: 80px 0 0 60px;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);   
    margin:0 auto; 
    font-family: 'Open Sans', sans-serif !important;
    color: var(--white);


    span {
        margin-right: 10px;
        font-size: 1.4rem;
    }
    
    & .toHome {
        text-transform: uppercase;
    }

    & .movieTitle {
        font-style: oblique;
    }

    @media all and (max-width: 414px) {
        span {
            font-size: 0.9rem;
        }
    }

`;
