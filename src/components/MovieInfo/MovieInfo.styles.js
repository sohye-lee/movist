import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${({backdrop}) => 
        backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` 
        : 'rgba(0,0,0,.2)'};
    background-size: cover;
    background-position : center;
    background-repeat : no-repeat;
    position: relative;
    z-index: 0;
    animation: animateMovieInfo 1s ease-in ;
  
    :after {
        content: "";
        position: absolute;
        background-color: rgb(33,33,33);
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0.6; 
        
    }

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        } 
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px) {
        background-size: cover;
        background-position: center;
    }

`;

export const Content = styled.div`
    position: relative;
    z-index: 100;    
    top: 18vh;
    height: 70vh;
    width: 80vw;
    margin: 0 auto;
    background-color: rgba(199,199,199,.5);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, .8);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    box-shadow: 10px 10px 30px 0 rgba(0,0,0,.5), -10px -10px 30px 0 rgba(0,0,0,.5);

    @media screen and (max-width: 768px) {
        display: block;
        height: auto;
    }

`;



export const MovieImage = styled.div`
    background: url('${({image}) => image}') center/cover no-repeat;
    padding: 1px;
    height: 100%;
    flex-basis: 35%;
    border-radius: 10px 0 0 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

export const Text = styled.div`
    flex-basis: 65%;
    color: var(--white);
    padding: 30px;
    overflow: hidden;
    text-overflow: ellipsis;


    h1 {
        font-family: 'Fjalla One', sans-serif !important;
        font-weight: 600;
        font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0;
    }

    h2 {
        margin-top: 0;
        font-weight: 100;
    }

    h3 {
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.4em;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    p, .score {
        padding-left: 20px ;
        border-left: 1px solid var(--white);
        font-family: 'Open Sans', sans-serif;
        font-size: 1.1em;
        font-weight: 100 !important;
    }


    .plot {
        max-height: 150px;
        // white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (max-width: 1200px) {
        .plot {
            max-height: 120px;
        }
        .directorList {
            display: flex;
            max-width: 100%;
            overflow: hidden;
        }
        .directorList p {
            font-size: 1rem;
            border: none;
            padding: 0;
            margin: 10px;
        }
    }

    @media all and (max-width: 414px) {

        padding: 15px;

        h1 {
            font-size: 1.6em;
        }

        h2 {
            font-size: 1.3em;
        }

        h3 {
            font-size: 1.2em;
        }
        .plot {
            max-height: 80px;
            font-size: .9em;
        }

    }
`;

export const Bar = styled.div`
    position: absolute;
    top: 91vh;
    left: 0;
    width: 100%;
    height: 9vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    .column {
        color: var(--white);
        width: 28vw;
        max-width: 220px;
        height: 70%;
        margin: 5px 20px;
        // background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, .3) 60%, rgba(255,255,255, .7) 100%);
        text-transform: uppercase;
        font-size: 1.1em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(180,180,180, .8);
        opacity: .8;
    }

    @media screen and (max-width: 768px) {
        .info {
            font-size: 0.7rem;
            display: block;
        }
    }
    
`;