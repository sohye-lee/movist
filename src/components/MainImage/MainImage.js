import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Content, Text } from './MainImage.styles';
import { Link }  from 'react-router-dom';

const MainImage = ({ image, title, text, movieId }) => (
    <Link to={`/${movieId}`}>
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    </Link>
) 

MainImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    movieId: PropTypes.number
}

export default MainImage;