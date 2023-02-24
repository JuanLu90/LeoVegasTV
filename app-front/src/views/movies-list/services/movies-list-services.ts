// UTILS
import apiUtils from '../../../utils/apiUtils';

const getMoviesListService = (): Promise<any> =>
  apiUtils.get({
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=f1eb0fddb91524fcb1e67860576e0d66',
  });

export { getMoviesListService };
