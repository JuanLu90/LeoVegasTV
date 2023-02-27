// DEPENDENCIES
import React from 'react';

// STYLED-COMPONENTS
import { CardWrapper, ImageContainer, Vote, Star, Watch } from './card.styled';

// IMAGES
import StarIcon from '../../assets/images/star.png';
import StarSavedIcon from '../../assets/images/star-saved.png';
import WatchIcon from '../../assets/images/watch-later.png';
import WatchSavedIcon from '../../assets/images/watch-later-saved.png';

// FUNCTION
const Card: React.FC<any> = (props) => {
  const {
    movie,
    favouriteMoviesListStoraged,
    setFavouriteMoviesListStoraged,
    watchLaterMoviesListStoraged,
    setWatchLaterMoviesListStoraged,
  } = props;

  const findFavoriteFn = () =>
    favouriteMoviesListStoraged.some((x: any) => x == movie.id);

  const findWatchLaterFn = () =>
    watchLaterMoviesListStoraged.some((x: any) => x == movie.id);

  const handleOnClickFav = (id: any) => {
    let copyArr = favouriteMoviesListStoraged;
    const matchMovie = copyArr.findIndex((z: any) => z == id);

    if (matchMovie !== -1) {
      copyArr.splice(matchMovie, 1);
      return setFavouriteMoviesListStoraged([...copyArr]);
    } else
      return setFavouriteMoviesListStoraged((prevArr: any) => [
        ...prevArr,
        movie.id,
      ]);
  };
  const handleOnClickWatch = (id: any) => {
    let copyArr = watchLaterMoviesListStoraged;
    const matchMovie = copyArr.findIndex((z: any) => z == id);

    if (matchMovie !== -1) {
      copyArr.splice(matchMovie, 1);
      return setWatchLaterMoviesListStoraged([...copyArr]);
    } else
      return setWatchLaterMoviesListStoraged((prevArr: any) => [
        ...prevArr,
        movie.id,
      ]);
  };

  return (
    <CardWrapper>
      <ImageContainer onClick={() => console.log('Redirect to details')}>
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
