import React from 'react';
//API

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, GENRES } from '../config';

//Components
import MainImage from './MainImage/MainImage';
import Grid from './Grid/GridComponent';
import Thumb from './Thumb/ThumbComponent'
import Spinner from './Spinner/SpinnerComponent';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/ButtonComponent';

//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
    console.log(state);

    if (error) return <div>Sorry, something went wrong.</div>
    // const moviesWithImg = state.results.slice(0,20).filter(movie => !movie.backdrop_path === false);
    const randomIndex = Math.floor(Math.random()*20);
    
    return (
        <div>
            {!searchTerm && state.results[randomIndex] &&
                <MainImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomIndex].backdrop_path}`}
                    title={state.results[randomIndex].original_title}
                    text={state.results[randomIndex].overview}
                    movieId={state.results[randomIndex].id}
                />
            }
            <Searchbar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? `You searched '${searchTerm}'`:'MOST POPULAR'}>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id} 
                        genre={GENRES[+movie.genre_ids[0]]}
                        clickable={true}
                        image={
                            movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        movieId={movie.id}
                        rating={movie.vote_average}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true) }/>
            )}
        </div>
    );
};


export default Home;