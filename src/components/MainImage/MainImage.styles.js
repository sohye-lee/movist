import styled from 'styled-components';

export const Wrapper = styled.div`
    background-image: 
    url('${({image}) => image}');
    background-size: cover;
    background-position: center top;
    background-wrap: no-wrap;
    height: 91vh;
    animation: animateMainImage 1s ease-in;
    z-index: -1;

    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 91vh;
        z-index: 1;
        background: linear-gradient(
            to bottom, 
            rgba(0,0,0,.9) 0%,
            rgba(0,0,0,.65) 10%,
            rgba(0,0,0,0) 30%,
            rgba(0,0,0,0) 41%, 
            rgba(0,0,0,0.65) 80%,
            rgba(0,0,0,1) 96%,
            rgba(0,0,0,1) 100%
        );
    }

    @keyframes animateMainImage {
        from {
            opacity: 0;
        } 
        to {
            opacity: 1;
        }
    }

   
`;

export const Content = styled.div`
    position: absolute;
    bottom: 20%;
    left: 20%;
    width: 60%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    color: var(--white);
    z-index: 3;
`;

export const Text = styled.div`
   z-index: 100;
   max-width: var(--maxWidth);
   width: 100%;
   margin-right: 20px;
   min-height: 100px;
   color: var(--white);


   h1 {
       font-family: 'Fjalla One', sans-serif !important;
       font-size: 6.5rem;
       letter-spacing : 2px;
       text-transform: uppercase;

       @media screen and (max-width: 760px) {
           font-size: var(--fontBig);
       }
   }

   p {
       font-size: 1.7rem;
       font-family: 'Open Sans', sans-serif !important;
       font-weight: 100;
       letter-spacing: 1px;

       @media screen and (max-width: 760px) {
           font-size: var(--fontSmall);
       }
   }

   @media screen and (max-width: 760px) {
        max-width: 100%;
   }
`;