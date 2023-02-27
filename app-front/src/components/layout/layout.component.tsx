// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Nav from './components/nav/nav.component';

// STYLED-COMPONENTS
import * as Std from './layout.styled';

// INTERFACES
// eslint-disable-next-line no-unused-vars
import { LayoutPropsType } from './interfaces/layout.component.interface';

// FUNCTIONS
const Layout: React.FC<LayoutPropsType> = ({
  children,
}): React.ReactElement => {
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
