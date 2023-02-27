// RERSOLVERS
import {
  getMoviesListResolver,
  getMoviesListFilterResolver,
} from '../resolvers/movies-list.resolver';

// INTERFACES
// eslint-disable-next-line no-unused-vars
import { MovieListHandlersType } from './interfaces/movies-list.handlers.interface';
// eslint-disable-next-line no-unused-vars
import { MovieListHandlersReturnType } from './interfaces/movies-list.handlers.interface';

const getMoviesListHandler = async ({
  setMoviesList,
  setIsFetching,
  setFilterInfo,
  page,
}: any): Promise<any> => {
  setIsFetching(true);

  const response = await getMoviesListResolver(page);

  if (response) {
    const { results, page, total_pages, total_results } = response;

    const moviesInfoFiltered = results.map((movie: any) => {
      const { id, title, vote_average, release_date, poster_path, overview } =
        movie;

      return { id, title, vote_average, release_date, poster_path, overview };
    });

    setFilterInfo({ page, total_pages, total_results, search: '' });
    setMoviesList(moviesInfoFiltered);
  } else {
    console.error('Error on getMoviesListHandler()');
  }
  setIsFetching(false);
};

const getMoviesListFilterHandler = async ({
  setMoviesList,
  setFilterInfo,
  setIsFetching,
  value,
  page,
}: any): Promise<any> => {
  setIsFetching(true);

  const response = await getMoviesListFilterResolver(value, page);

  if (response) {
    const { results, page, total_pages, total_results } = response;

    const moviesInfoFiltered = results.map((movie: any) => {
      const { id, title, vote_average, release_date, poster_path, overview } =
        movie;

      return { id, title, vote_average, release_date, poster_path, overview };
    });

    setFilterInfo((prevState: any) => ({
      ...prevState,
      page,
      total_pages,
      total_results,
    }));

    setMoviesList(moviesInfoFiltered);
  } else {
    console.error('Error on getMoviesListFilterHandler()');
  }

  setIsFetching(false);
};

const MoviesListHandlers = ({
  setMoviesList,
  setIsFetching,
  setFilterInfo,
}: MovieListHandlersType): MovieListHandlersReturnType => ({
  handleGetMoviesList: (page: number) =>
    getMoviesListHandler({
      setMoviesList,
      setIsFetching,
      setFilterInfo,
      page,
    }),
  handleFilterMoviestList: (value: string, page: number) =>
    getMoviesListFilterHandler({
      setMoviesList,
      setIsFetching,
      value,
      page,
      setFilterInfo,
    }),
});

export default MoviesListHandlers;
