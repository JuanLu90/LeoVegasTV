import React from 'react'

// COMPONENTS
import Nav from './components/nav/nav.component'
// import Main from './components/main/main.component'
import Footer from './components/footer/footer.component'

// STYLED-COMPONENTS
import * as Std from './layout.styled'

// FUNCTIONS
const Layout: React.FC<any> = ({ children }): React.ReactElement => {
  return (
    <Std.Wrapper>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </Std.Wrapper>
  )
}

export default Layout
