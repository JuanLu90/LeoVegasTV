// SERVICES
import { getMoviesListService } from '../../services/movies-list.services';

// RESOLVERS
import { getMoviesListResolver } from '../movies-list.resolver';

// MOCKS
jest.mock('../../services/movies-list.services');

// TESTS
describe('Movies List Resolver', () => {
  const mockedResponse: any = [
    {
      id: 550,
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      release_date: '1999-10-15',
      title: 'Fight Club',
    },
  ];

  beforeEach(() => {
    (getMoviesListService as jest.Mock).mockReturnValue(mockedResponse);
  });

  it('should get movies list', async () => {
    const page = 1;
    const response = await getMoviesListResolver(page);

    expect(response).toEqual(mockedResponse);
  });
});
