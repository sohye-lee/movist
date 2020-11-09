import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Image } from './Thumb.styles';


const Thumb = ({image, genre, clickable, movieId, rating}) => (
    <>  
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Wrapper>
                    <Image src={image} alt='movie poster' />
                    <h3>{genre}</h3>
                    <div>
                        <StarRatings 
                            rating={+rating/2}
                            starRatedColor="white"
                            starEmptyColor="gray"
                            numberOfStars={5}
                            starDimension="13px"
                            starSpacing="1px"
                        />
                    </div>
                </Wrapper>
            </Link>
         
        ) : (
            <Wrapper>
                <Image src={image} alt='movie poster' />
                <h3>{genre}</h3>
                <div>
                    <StarRatings 
                        rating={+rating/2}
                        starRatedColor="white"
                        starEmptyColor="gray"
                        numberOfStars={5}
                        starDimension="13px"
                        starSpacing="1px"
                    />
                </div>
            </Wrapper>
        )}
    </>  
);

Thumb.propTypes = {
    image: PropTypes.string, 
    genre: PropTypes.string, 
    clickable: PropTypes.bool, 
    movieId: PropTypes.number, 
    rating: PropTypes.number
}

export default Thumb;