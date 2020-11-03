import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background-color: var(--darkGrey);
    width: 20%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 300ms;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;