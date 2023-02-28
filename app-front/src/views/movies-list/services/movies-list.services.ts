// UTILS
import apiUtils from '../../../utils/apiUtils';

// CONSTANTS
import { urlMoviesList, urlMoviesListFilter } from './movies-list.constants';

const getMoviesListService = (page: any): Promise<any> =>
  apiUtils.get({
    url: `${urlMoviesList}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
  });

export { getMoviesListService };

const getMoviesListFilterService = (value: any, page: any): Promise<any> =>
  apiUtils.get({
    url: `${urlMoviesListFilter}?api_key=${process.env.REACT_APP_API_KEY}&query=${value}&page=${page}`,
  });

export { getMoviesListFilterService };
