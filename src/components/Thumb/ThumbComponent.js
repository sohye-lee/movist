import React from 'react';
import StarRatings from 'react-star-ratings';
//Styles
import { Wrapper, Image } from './Thumb.styles';


const Thumb = ({image, genre, clickable, movieId, rating}) => (
    <Wrapper>
        <Image src={image} alt='movie poster' />
        <h3>{genre}</h3>
        <div>
            <StarRatings 
                rating={rating}
                starRatedColor="white"
                starEmptyColor="gray"
                numberOfStars={10}
                starDimension="13px"
                starSpacing="1px"
                name={rating}
            />
        </div>
    </Wrapper>
);

export default Thumb;