// DEPENDENCIES
import { render, screen } from '../../../utils/test-utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// HOOKS

import useMoviesListHook from '../hooks/movies-list.hook';

// COMPONENTS
import MoviesList from '../movies-list.component';

// MOCKS
jest.mock('../hooks/movies-list.hook');
// jest.mock('react-router-dom', {
//   useNavigate: jest.fn()
// });

describe('MoviesList component', () => {
  beforeEach(() => {
    (useMoviesListHook as jest.Mock).mockReturnValue({
      handleFilterMoviestList: jest.fn(),
      moviesList: [],
      isFetching: true,
      handleGetMoviesList: jest.fn(),
      setFilterInfo: jest.fn(),
      filterInfo: [],
    });
  });

  it('should render', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
        </Routes>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('movies-list-component')).toBeTruthy();
    expect(screen.getByTestId('filter-component')).toBeTruthy();
    expect(screen.getByTestId('loader-component')).toBeTruthy();
  });
});
