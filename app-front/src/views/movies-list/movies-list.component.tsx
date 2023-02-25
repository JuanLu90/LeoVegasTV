// DEPENDENCIES
import React from 'react';

// COMPONENTS
import CardInfo from '../../components/card/card.component';
import Loader from '../../components/loader/loader.component';
import Filter from '../../components/filter/filter.component';

// STYLED-COMPONENTS
import { MoviesListWrapper, MoviesResultWrapper } from './movies-list.styled';

// HOOKS
import useMoviesListHook from './hooks/movies-list.hook';

const MoviesList: React.FC = (): React.ReactElement => {
  const {
    moviesList,
    isFetching,
    handleGetMoviesList,
    filterInfo,
    setFilterInfo,
  } = useMoviesListHook();

  const onChangePage = (value: number) => {
    setFilterInfo((prevState: any) => ({ ...prevState, page: value }));
  };

  const handleChange = (value: any) => {
    if (value)
      setFilterInfo((prevState: any) => ({
        ...prevState,
        page: 1,
        search: value,
      }));
    else handleGetMoviesList(filterInfo.page);
  };

  return (
    <MoviesListWrapper>
      <Filter
        handleChange={handleChange}
        onChangePage={onChangePage}
        filterInfo={filterInfo}
        setFilterInfo={setFilterInfo}
      />

      {!isFetching && moviesList.length > 0 ? (
        <MoviesResultWrapper>
          {moviesList.map((movie: any) => (
            <CardInfo key={movie.id} movie={movie} />
          ))}
        </MoviesResultWrapper>
      ) : (
        <Loader />
      )}
    </MoviesListWrapper>
  );
};

export default MoviesList;
