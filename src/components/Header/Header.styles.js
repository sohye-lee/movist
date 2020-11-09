import styled from 'styled-components';

export const Wrapper = styled.div`
    z-index: 100;
    background-color: rgba(0,0,0,0);
    padding: 0 20px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    margin: 0 auto
`;


export const LogoImg = styled.img`
    width: 200px;
    height: 100%;

    @media screen and (max-width: 760px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 90px;
    height: 100%;

    @media screen and (max-width: 760px) {
        width: 70px;
    }
`;