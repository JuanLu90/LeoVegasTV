// DEPENDENCIES
import { useState, useEffect } from 'react';

// HANDLERS
import MoviesListHandlers from '../handlers/movies-list.handlers';

// INTERFACES
// eslint-disable-next-line no-unused-vars
import { MoviesListHookReturnType } from './interfaces/movies-list-hook.interface';
import { MovieListItemType } from '../../../interfaces/MovieListItem.interface';
import { FilterListItemType } from '../../../interfaces/FilterListItem.interface';

const useMoviesListHook = (): MoviesListHookReturnType => {
  const initialStateFilterInfo = {
    page: 1,
    search: '',
  };

  const [moviesList, setMoviesList] = useState<MovieListItemType[] | []>([]);
  const [filterInfo, setFilterInfo] = useState<FilterListItemType>(
    initialStateFilterInfo,
  );
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (!filterInfo.search) handleGetMoviesList(filterInfo.page);
    else handleFilterMoviestList(filterInfo.search, filterInfo.page);
  }, [filterInfo.search, filterInfo.page]);

  const { handleGetMoviesList, handleFilterMoviestList } = MoviesListHandlers({
    setMoviesList,
    setIsFetching,
    moviesList,
    setFilterInfo,
    filterInfo,
  });

  return {
    handleFilterMoviestList,
    moviesList,
    isFetching,
    handleGetMoviesList,
    setFilterInfo,
    filterInfo,
  };
};

export default useMoviesListHook;
