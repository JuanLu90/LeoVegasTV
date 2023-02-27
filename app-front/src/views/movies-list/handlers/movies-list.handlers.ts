import {
  getMoviesListResolver,
  getMoviesListFilterResolver,
} from '../resolvers/movies-list.resolver';

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
}: any): any => ({
  handleGetMoviesList: (page: any) =>
    getMoviesListHandler({
      setMoviesList,
      setIsFetching,
      setFilterInfo,
      page,
    }),
  handleFilterMoviestList: (value: any, page: any) =>
    getMoviesListFilterHandler({
      setMoviesList,
      setIsFetching,
      value,
      page,
      setFilterInfo,
    }),
});

export default MoviesListHandlers;
