import styled from "styled-components";
import { media } from "../../themes/mediaQuery";

export const Nav = styled.nav`
  text-align: right;

  & ul {
    list-style: none;
    display: inline-block;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  & ul li {
    padding: 12px;
  }

  ${media.phone(`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;

    & ul li {
      padding: 5px;
      display: inline;
    }
  `)}
`;