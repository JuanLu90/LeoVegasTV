// DEPENDENCIES
import { renderHook } from '../../../../utils/test-utils';

// HOOK
import useMoviesListHook from '../movies-list.hook';

// HANDLERS
import MoviesListHandlers from '../../handlers/movies-list.handlers';

// MOCKS
jest.mock('../../handlers/movies-list.handlers');
jest.mock('../../../../context/app.context');

describe('Movies List Hook', () => {
  beforeEach(() => {
    (MoviesListHandlers as jest.Mock).mockReturnValue({
      handleGetMoviesList: jest.fn(),
      handleFilterMoviestList: jest.fn(),
    });
  });

  it('should provide the hook data', () => {
    const hookReturnProps = [
      'handleFilterMoviestList',
      'moviesList',
      'isFetching',
      'handleGetMoviesList',
      'setFilterInfo',
      'filterInfo',
    ];
    const { result } = renderHook(() => useMoviesListHook());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
