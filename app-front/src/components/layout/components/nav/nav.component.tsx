// DEPENDENCIES
import React from 'react';

// STYLED-COMPONENTS
import { NavWrapper, LogoWrapper, SpanTV } from './nav.styled';

import Logo from '../../../../assets/images/leovegas_logo.png';

// FUNCTION
const Nav: React.FC = (): React.ReactElement => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <img src={Logo} alt="LeoVegas Logo" title="LeoVegas Logo" />
      </LogoWrapper>
      <SpanTV>TV</SpanTV>
    </NavWrapper>
  );
};

export default Nav;
