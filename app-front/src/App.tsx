import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CONTEXT
import { AppContextProvider } from './context/app.context';

// COMPONENTS
import Layout from './components/layout/layout.component';
import MoviesList from './views/movies-list/movies-list.component';
import FavoritesList from './views/favorites-list/favorites-list.component';
import WatchLaterList from './views/watchLater-list/watchLater-list.component';

const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/watchlater" element={<WatchLaterList />} />
          </Routes>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
