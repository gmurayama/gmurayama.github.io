import styled from "styled-components";

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
`;