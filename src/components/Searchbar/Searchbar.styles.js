import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 9vh;
    padding: 10px 0 0 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: animateMainImage 1s ease-in;
    
`;

export const Content = styled. div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        height: 30px;
        width: 30px;
        position: absolute;
        left: 70px

    }

    input {
        border: none;
        margin: 0 auto;
        padding: 0 70px;
        height: 70%;
        border-radius: 30px;
        width: 90%;
        background-color: var(--medGrey);
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--white);

        :focus {
            outline: none;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            left: 20px;
        }
    }
    
`;

