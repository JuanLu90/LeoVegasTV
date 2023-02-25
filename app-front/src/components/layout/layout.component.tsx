import React from 'react';

// COMPONENTS
import Nav from './components/nav/nav.component';

// STYLED-COMPONENTS
import * as Std from './layout.styled';

// FUNCTIONS
const Layout: React.FC<any> = ({ children }): React.ReactElement => {
  return (
    <Std.Wrapper>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">{children}</div>
    </Std.Wrapper>
  );
};

export default Layout;
