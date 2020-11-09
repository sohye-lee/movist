import React from 'react';
import { useParams, Link } from 'react-router-dom';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import Grid from './Grid/GridComponent';
import Spinner from './Spinner/SpinnerComponent';
import BreadCrumb from './BreadCrumb/BreadCrumbComponent';
import MovieInfo from './MovieInfo/MovieInfoComponent';
import Actor from './Actor/ActorComponent';
// import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg';


function Movie() {
    const { movieId } = useParams();
    const { state:movie, loading, error } = useMovieFetch(movieId);
    if (loading) return <Spinner />
    if (error) return (<Link to='/'>SOMETHINK WENT WRONG. PLZ GO BACK.</Link>)

    return (
        <>
            <BreadCrumb movieTitle={movie.title} />
            <MovieInfo movie={movie}/>
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        actorId={
                            actor.id
                            ? actor.id
                            : "Can't find any biography"
                        }
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                        
                    />
                ))}
            </Grid>
        </>
    );
}


export default Movie;