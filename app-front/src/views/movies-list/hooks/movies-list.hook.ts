// DEPENDENCIES
import { useState, useEffect } from 'react';
// CONTEXT
// import { useAppContext } from '../../../context/app.context'
// HANDLERS
import MoviesListHandlers from '../handlers/movies-list.handlers';

const useMoviesListHook = (): any => {
  const [moviesList, setMoviesList] = useState<any[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  useEffect(() => {
    handleGetMoviesList();
  }, []);

  const { handleGetMoviesList } = MoviesListHandlers({
    setMoviesList,
    setIsFetching,
    setIsFiltering,
    moviesList,
  });

  return {
    moviesList,
    isFetching,
    isFiltering,
  };
};

export default useMoviesListHook;
