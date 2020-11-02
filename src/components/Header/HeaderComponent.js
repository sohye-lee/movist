import React from 'react';

import LogoWhite from '../../images/movist_logo_white.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';


const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={LogoWhite} alt={'Movist Logo'} />
            <TMDBLogoImg src={TMDBLogo} alt={'TMDB Logo'} />
        </Content>
    </Wrapper>
)

export default Header;
