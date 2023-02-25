// UTILS
import apiUtils from '../../../utils/apiUtils';

const getMoviesListService = (page: any): Promise<any> =>
  apiUtils.get({
    url: `https://api.themoviedb.org/3/movie/popular?api_key=f1eb0fddb91524fcb1e67860576e0d66&page=${page}`,
  });

export { getMoviesListService };

const getMoviesListFilterService = (value: any, page: any): Promise<any> =>
  apiUtils.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=f1eb0fddb91524fcb1e67860576e0d66&query=${value}&page=${page}`,
  });

export { getMoviesListFilterService };
