// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader.component';
import Filter from '../../components/filter/filter.component';
import NoResults from '../../components/no-results/no-results.component';

// HOOKS
import useMoviesListHook from './hooks/movies-list.hook';

// STYLED-COMPONENTS
import { MoviesListWrapper, MoviesResultWrapper } from './movies-list.styled';

// INTERFACES
// eslint-disable-next-line no-unused-vars
import { MovieListItemType } from '../../interfaces/MovieListItem.interface';
// eslint-disable-next-line no-unused-vars
import { FilterListItemType } from '../../interfaces/FilterListItem.interface';

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

  const handleChange = (value: string) => {
    if (value)
      setFilterInfo((prevState: FilterListItemType) => ({
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

      {isFetching ? (
        <Loader />
      ) : moviesList.length > 0 ? (
        <MoviesResultWrapper>
          {moviesList.map((movie: MovieListItemType) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </MoviesResultWrapper>
      ) : (
        <NoResults />
      )}
    </MoviesListWrapper>
  );
};

export default MoviesList;
