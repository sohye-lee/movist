import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Content, Text, MovieImage, Bar } from './MovieInfo.styles';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Image
import NoImage from '../../images/no_image.jpg';
//Helpers
import { calcTime, convertMoney } from '../../helpers';


const MovieInfo = ({movie}) =>  {

    console.log(IMAGE_BASE_URL+POSTER_SIZE+ movie.backdrop_path);
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <MovieImage 
                    image={
                        movie.poster_path 
                        ? `${IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path}`
                        : NoImage
                    }
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h2>{movie.release_date.slice(0,4)}</h2>
                    <h3>PLOT</h3>
                    <p className='plot'>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">
                                {movie.vote_average}
                            </div>
                            <div className="director">
                                <h3>Director{movie.directors.length > 1 ? 'S' : ''}</h3>
                                <div className="directorList">
                                    {movie.directors.map(director => (
                                        <p key={director.credit_id}>{director.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Text>
            </Content>
            <Bar> 
                <div className="column">
                    <p><span className="info">Running time : </span>{calcTime(movie.runtime)}</p>
                </div>
                <div className="column">
                    <p><span className="info">Budget : </span>{convertMoney(movie.budget)}</p>
                </div>
                <div className="column">
                    <p><span className="info">Revenue : </span>{convertMoney(movie.revenue)}</p>
                </div>
            </Bar>
        </Wrapper>
    )                         
};

MovieInfo.propTypes = {
    movie: PropTypes.object
};

export default MovieInfo;