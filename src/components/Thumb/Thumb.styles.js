import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 280ms ease-in;
    border-radius: 10px;

    h3 {
        position: absolute;
        bottom: 4%;
        left: 15px;
        color: var(--white);
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
        z-index: 100;
        text-shadow: 1px 1px rgba(0,0,0,.7);
        opacity: 0;
        transition: all 600ms ease-in;

    }

    div {
        position: absolute;
        bottom: 3%;
        left: 5px;
        opacity: 0;
        transition: all 550ms ease-in;
        z-index: 100;
    }

    :hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 20px 0 rgba(0,0,0,.5);

        div, h3 {
            transform: scale(1.05);
            opacity: 1;
        }
    }

    :after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 60%, rgba(0,0,0,8) 100%);
        opacity: 0;
        transition: all 600ms ease-in;
    }

    :hover::after {
        opacity: 1;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
    max-width: 720px;
    transition: all 280ms ease-in;
    object-fit: cover;
    animation: animateThumb 1s ease-in;

    :hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 20px 0 rgba(0,0,0,.5);
    }


    @keyframes animateThumb {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;