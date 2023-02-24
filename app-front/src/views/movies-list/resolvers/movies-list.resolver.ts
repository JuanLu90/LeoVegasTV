// SERVICES
import { getMoviesListService } from '../services/movies-list-services';

const getMoviesListResolver = async (): Promise<any> => {
  const response = await getMoviesListService();
  return response?.results;
};

export { getMoviesListResolver };
