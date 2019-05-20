import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface ILinkProps extends LinkProps {
  isActived?: boolean;
}

export const Menu = styled.nav`
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

export const Socials = styled.ul`
  border-right: 1px solid #d1d5de;
  padding: 0 10px 0 0;
  margin: 0 6px 0 0;

  & li span {
    font-size: 20px;
    vertical-align: text-bottom;
  }
`;

export const NavItems = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const NavLink = styled(Link) <ILinkProps>`
    position: relative;

    &:hover:after { transform: scaleX(1); }

    &::after {
      position: absolute;
      display: block;
      bottom: -3px;
      left: 0;
      right: -1px;
      content: '';
      border-bottom: solid 3px #2274a5;
      ${props => props.isActived ? 'transform: scaleX(1);' : 'transform: scaleX(0);'}
      transition: transform 200ms ease-in-out;
      transform-origin: 0% 50%;
    }
`;