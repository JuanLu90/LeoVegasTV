// DEPENDENCIES
import React from 'react';
// STYLED COMPONENTS
import { NoResultWrapper } from './no-results.styled';

const Loader: React.FC = (): React.ReactElement => {
  return <NoResultWrapper>No results found</NoResultWrapper>;
};

export default Loader;
