// DEPENDENCIES
import React, { createContext, useContext } from 'react';

// HOOKS
import { useLocalStorage } from '../hooks/useLocalStorage';

// INTERFACES
// import { AppContextPropsType } from "./interfaces/app.context.interface";

export const AppContext = createContext<any>({
  favouriteMoviesListStoraged: [],
  setFavouriteMoviesListStoraged: () => {},
  watchLaterMoviesListStoraged: [],
  setWatchLaterMoviesListStoraged: () => {},
});

export const AppContextProvider: React.FC<any> = ({ children }: any) => {
  const [favouriteMoviesListStoraged, setFavouriteMoviesListStoraged] =
    useLocalStorage('favouriteMoviesList', []);

  const [watchLaterMoviesListStoraged, setWatchLaterMoviesListStoraged] =
    useLocalStorage('watchMoviesList', []);

  return (
    <AppContext.Provider
      value={{
        setFavouriteMoviesListStoraged,
        favouriteMoviesListStoraged,
        watchLaterMoviesListStoraged,
        setWatchLaterMoviesListStoraged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): any => useContext(AppContext);
