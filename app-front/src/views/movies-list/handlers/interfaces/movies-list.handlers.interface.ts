// INTERFACES
import { MovieListItemType } from '../../../../interfaces/MovieListItem.interface';
import { FilterListItemType } from '../../../../interfaces/FilterListItem.interface';

export interface MovieListHandlersType {
  setMoviesList: any;
  setIsFetching: (isFetching: boolean) => void;
  setFilterInfo: (obj: any) => void;
  moviesList: MovieListItemType[];
  filterInfo: FilterListItemType;
}

export interface MovieListHandlersReturnType {
  handleGetMoviesList: (page: number) => void;
  handleFilterMoviestList: (value: string, page: number) => void;
}
