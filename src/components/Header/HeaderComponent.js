import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from '../../images/movist_logo_white.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';


const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={LogoWhite} alt={'Movist Logo'} />
            </Link>
            <a href='https://www.themoviedb.org/' target="blank">
                <TMDBLogoImg src={TMDBLogo} alt={'TMDB Logo'} />
            </a>
        </Content>
    </Wrapper>
)

export default Header;
