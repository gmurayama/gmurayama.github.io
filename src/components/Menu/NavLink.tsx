import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface ILinkProps extends LinkProps {
  isActived?: boolean;
}

export const NavLink = styled(Link)<ILinkProps>`
    position: relative;

    &:hover:after { transform: scaleX(1); }

    &::after {
      position: absolute;
      display: block;
      bottom: -3px;
      left: 0;
      right: -1px;
      content: '';
      border-bottom: solid 2px #2274a5;
      transform: scaleX(0);
      transition: transform 200ms ease-in-out;
      transform-origin: 0% 50%;
    }
`;