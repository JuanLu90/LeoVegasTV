// DEPENDENCIES
import React from 'react';

// STYLED-COMPONENTS
import { CardWrapper, ImageContainer, Vote, Star, Watch } from './card.styled';

// CONTEXT
import { useAppContext } from '../../context/app.context';

// IMAGES
import StarIcon from '../../assets/images/star.png';
import StarSavedIcon from '../../assets/images/star-saved.png';
import WatchIcon from '../../assets/images/watch-later.png';
import WatchSavedIcon from '../../assets/images/watch-later-saved.png';

// FUNCTION
const Card: React.FC<any> = (props) => {
  const { movie } = props;

  const {
    favouriteMoviesListStoraged,
    setFavouriteMoviesListStoraged,
    watchLaterMoviesListStoraged,
    setWatchLaterMoviesListStoraged,
  } = useAppContext();

  const findFavoriteFn = () =>
    favouriteMoviesListStoraged.some((x: any) => x.id == movie.id);

  const findWatchLaterFn = () =>
    watchLaterMoviesListStoraged.some((x: any) => x.id == movie.id);

  const handleOnClickFav = (id: any) => {
    const matchMovie = favouriteMoviesListStoraged.findIndex(
      (z: any) => z.id == id,
    );

    if (matchMovie !== -1) {
      favouriteMoviesListStoraged.splice(matchMovie, 1);
      return setFavouriteMoviesListStoraged([...favouriteMoviesListStoraged]);
    } else
      return setFavouriteMoviesListStoraged((prevArr: any) => [
        ...prevArr,
        movie,
      ]);
  };
  const handleOnClickWatch = (id: any) => {
    const matchMovie = watchLaterMoviesListStoraged.findIndex(
      (z: any) => z.id == id,
    );

    if (matchMovie !== -1) {
      watchLaterMoviesListStoraged.splice(matchMovie, 1);
      return setWatchLaterMoviesListStoraged([...watchLaterMoviesListStoraged]);
    } else
      return setWatchLaterMoviesListStoraged((prevArr: any) => [
        ...prevArr,
        movie,
      ]);
  };

  return (
    <CardWrapper>
      <ImageContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
        />
      </ImageContainer>
      <Vote>{movie.vote_average}</Vote>
      <Star
        src={findFavoriteFn() ? StarSavedIcon : StarIcon}
        alt="Star Icon"
        onClick={() => handleOnClickFav(movie.id)}
      />
      <Watch
        src={findWatchLaterFn() ? WatchSavedIcon : WatchIcon}
        alt="Watch Later Icon"
        onClick={() => handleOnClickWatch(movie.id)}
      />
    </CardWrapper>
  );
};

export default Card;
