import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  text-align: center;

  @media (min-width: 1000px) {
    text-align: left;
    margin-left: 2rem;
  }

  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.div`
  .bar {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    justify-content: center;
    border-bottom: 10px solid ${(props) => props.theme.black};
    @media (min-width: 1000px) {
      grid-template-columns: auto 1fr;
      justify-content: space-between;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Sick Fits</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </StyledHeader>
  );
}

export default Header;
