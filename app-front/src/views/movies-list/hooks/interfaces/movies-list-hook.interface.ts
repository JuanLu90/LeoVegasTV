// INTERFACES
import { MovieListItemType } from '../../../../interfaces/MovieListItem.interface';
import { FilterListItemType } from '../../../../interfaces/FilterListItem.interface';

export interface MoviesListHookReturnType {
  handleFilterMoviestList: (value: string, page: number) => void;
  moviesList: MovieListItemType[];
  isFetching: boolean;
  handleGetMoviesList: (value: number) => void;
  setFilterInfo: (obj: any) => void;
  filterInfo: FilterListItemType;
}
