import styled from 'styled-components';

export const Wrapper = styled.div`
    
    width: 100%;
    height: 80px;
    background-color: var(--darkGrey);
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Content = styled. div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        height: 30px;
        width: 30px;
        position: absolute;
        left: 20px

    }

    input {
        border: none;
        margin: 0 auto;
        padding: 0 70px;
        height: 70%;
        border-radius: 30px;
        width: 100%;
        background-color: var(--medGrey);
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
    
`;

