import React  from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Image, Text  } from './Actor.styles';
//Config
import { SEARCH_ACTOR_URL } from '../../config';


const Actor = ({name, character, imageUrl, actorId}) => (

    <a href={`${SEARCH_ACTOR_URL}${actorId}`} target="blank">
        <Wrapper>
            <Image src={imageUrl} alt='actor image' />
            <Text>
                <h3>{name}</h3>
                <p>{character}</p>
            </Text>
        </Wrapper>
    </a>

);

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
    actorId: PropTypes.number
};

export default Actor;