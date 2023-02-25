// SERVICES
import {
  getMoviesListService,
  getMoviesListFilterService,
} from '../services/movies-list-services';

const getMoviesListResolver = async (page: any): Promise<any> => {
  console.log('getMoviesListResolver');
  const response = await getMoviesListService(page);
  return response;
};

export { getMoviesListResolver };

const getMoviesListFilterResolver = async (
  value: any,
  page: any,
): Promise<any> => {
  console.log('getMoviesListFilterResolver');
  const response = await getMoviesListFilterService(value, page);
  return response;
};

export { getMoviesListFilterResolver };
