// DEPENDENCIES
import { useState, useEffect } from 'react';

// HANDLERS
import MoviesListHandlers from '../handlers/movies-list.handlers';

const useMoviesListHook = (): any => {
  const initialStateFilterInfo = {
    page: 1,
    search: '',
  };

  const [moviesList, setMoviesList] = useState<any[] | []>([]);
  const [filterInfo, setFilterInfo] = useState<any | {}>(
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
