import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <span className="toHome">Home</span>
                <span>|</span>
                <span className="movieTitle">{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
};

export default BreadCrumb;