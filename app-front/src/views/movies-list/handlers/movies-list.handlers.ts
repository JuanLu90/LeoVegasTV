import { getMoviesListResolver } from '../resolvers/movies-list.resolver';

const getMoviesListHandler = async ({
  setMoviesList,
  setIsFetching,
}: any): Promise<any> => {
  setIsFetching(true);
  const response = await getMoviesListResolver();
  if (response) {
    const moviesInfoFiltered = response.map((movie: any) => {
      const { id, title, vote_average, release_date, poster_path, overview } =
        movie;

      return { id, title, vote_average, release_date, poster_path, overview };
    });

    console.log('response', response);
    setMoviesList(moviesInfoFiltered);
  } else {
    console.error('Error on getMoviesListHandler()');
  }
  setIsFetching(false);
};

const MoviesListHandlers = ({ setMoviesList, setIsFetching }: any): any => ({
  handleGetMoviesList: () =>
    getMoviesListHandler({
      setMoviesList,
      setIsFetching,
    }),
});

export default MoviesListHandlers;
