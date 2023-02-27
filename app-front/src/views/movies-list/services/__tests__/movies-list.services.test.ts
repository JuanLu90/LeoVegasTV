// SERVICES
import { getMoviesListService } from '../movies-list.services';

// UTILS
import apiUtils from '../../../../utils/apiUtils';

// MOCKS
jest.mock('../../../../utils/apiUtils');

describe('Movies List Services', () => {
  it('should get movies list', async () => {
    const page = 1;
    await getMoviesListService(page);

    expect(apiUtils.get).toHaveBeenCalled();
    expect(apiUtils.get).toHaveBeenCalledWith({
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=f1eb0fddb91524fcb1e67860576e0d66&page=1',
    });
  });
});
