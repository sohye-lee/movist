import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 300ms ease-in;
    border-radius: 10px;
    padding: 3px;
    background: linear-gradient(-45deg, rgb(160,160,160) 0%, rgb(200,200,200) 40%, rgba(230,230,230) 60%, rgba(170,170,170) 100%);

    :hover  {
        transform: scale(1.07);
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    // margin: 0 auto;
    border-radius: 10px;
    max-width: 720px;
    object-fit: cover;
    animation: animateThumb 1s ease-in;



    @keyframes animateThumb {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
}
`;

export const Text = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 20%, rgba(0,0,0, .8) 100%);
    text-align: center;
    color: var(--white);
    line-height: 130%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 0 0 10px 10px;
    transition: all 280ms ease-in;
    animation: animateThumb 1s ease-in;

    h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
        line-
    }

    p {
        margin: 5px;
        padding: 0;
    }

    

    @keyframes animateThumb {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
`;

export const Biography = styled.div`
        
`