// DEPENDENCIES
import React from 'react';

// COMPONENTS
import CardInfo from '../../components/cardInfo/cardInfo.component';

// HOOKS
import useMoviesListHook from './hooks/movies-list.hook';

const MoviesList: React.FC = (): React.ReactElement => {
  const { moviesList, isFetching } = useMoviesListHook();

  return (
    <div>
      {!isFetching && moviesList.length > 0 ? (
        <div>
          {moviesList.map((movie: any) => (
            <CardInfo key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        '<Loader />'
      )}
    </div>
  );
};

export default MoviesList;
