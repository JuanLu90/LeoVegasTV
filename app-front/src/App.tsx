import React from 'react'

// COMPONENTS
import Layout from './components/layout/layout.component'
import { AppContextProvider } from './context/app.context'
import MoviesList from './views/movies-list/movies-list.component'

const App: React.FC = (): React.ReactElement => {
  return (
    <AppContextProvider>
      <Layout>
        <MoviesList />
      </Layout>
    </AppContextProvider>
  )
}

export default App
