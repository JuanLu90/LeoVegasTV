// DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';

// STYLED-COMPONENTS
import { NavWrapper, LogoWrapper, SpanTV } from './nav.styled';

import Logo from '../../../../assets/images/leovegas_logo.png';

// FUNCTION
const Nav: React.FC = (): React.ReactElement => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="LeoVegas Logo" title="LeoVegas Logo" />
        </Link>
      </LogoWrapper>
      <SpanTV>TV</SpanTV>
    </NavWrapper>
  );
};

export default Nav;
