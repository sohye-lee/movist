import styled from 'styled-components';

export const Wrapper = styled.div`
   background: linear-gradient(
       to bottom, 
       rgba(0,0,0,0) 41%, 
       rgba(0,0,0,0.65) 100%
   );
   background-image: 
   url('${({image}) => image}');
   background-size: cover;
   background-position: center;
   background-wrap: no-wrap;
   height: 600px;
   position: relative;
   animation: animateMainImage 1s ease-in;

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
   padding: 20px;
   max-width: var(--maxWidth);
   color: var(--white);
`;

export const Text = styled.div`
   z-index: 100;
   max-width: var(--maxWidth);
   position: absolute;
   bottom: 40px;
   margin-right: 20px;
   min-height: 100px;
   color: var(--white);

   h1 {
       font-size: var(--fontSuperBig);

       @media screen and (max-width: 760px) {
           font-size: var(--fontBig);
       }
   }

   p {
       font-size: var(--fontMed);

       @media screen and (max-width: 760px) {
           font-size: var(--fontSmall);
       }
   }

   @media screen and (max-width: 760px) {
        max-width: 100%;
   }
`;