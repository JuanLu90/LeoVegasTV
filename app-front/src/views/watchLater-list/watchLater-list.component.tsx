// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader.component';
import NoResults from '../../components/no-results/no-results.component';

// HOOKS
import useMoviesListHook from '../movies-list/hooks/movies-list.hook';

// CONTEXT
import { useAppContext } from '../../context/app.context';

// STYLED-COMPONENTS
import {
  WatchLaterListWrapper,
  WatchLaterResultWrapper,
  WatchLaterListTitle,
} from './watchLater-list.styled';

const MoviesList: React.FC = (): React.ReactElement => {
  const { isFetching } = useMoviesListHook();

  const { watchLaterMoviesListStoraged } = useAppContext();

  return (
    <WatchLaterListWrapper>
      <WatchLaterListTitle>Watch Later List</WatchLaterListTitle>

      {isFetching ? (
        <Loader />
      ) : watchLaterMoviesListStoraged.length > 0 ? (
        <WatchLaterResultWrapper>
          {watchLaterMoviesListStoraged.map((movie: any) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </WatchLaterResultWrapper>
      ) : (
        <NoResults />
      )}
    </WatchLaterListWrapper>
  );
};

export default MoviesList;
