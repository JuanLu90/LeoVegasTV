// COMPONENTS
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

// STYLED-COMPONENTS
import * as Std from './Styled';

// FUNCTIONS
const Layout = () => {
  return (
    <Std.Wrapper>
      <div className="nav"><Nav /></div>
      <div className="main"><Main /></div>
      <div className="footer"><Footer /></div>
    </Std.Wrapper>
  );
};

export default Layout;