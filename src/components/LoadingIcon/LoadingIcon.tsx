import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface IProps {
  color?: string;
}

const DashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const RotateKeyframe = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 25px;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const SvgCircular = styled.svg`
  animation: ${RotateKeyframe} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const CirclePath = styled.circle<IProps>`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${DashKeyframe} 1.5s ease-in-out infinite;
  stroke: ${props => props.color};
  stroke-linecap: round;
`;

/**
 * LoadingIcon
 */
/** @component */
export const LoadingIcon = ({ color = "#2274A5" }: IProps) => (
  <Loader>
    <SvgCircular
      viewBox="25 25 50 50"
    >
      <CirclePath
        color={color}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="5"
        strokeMiterlimit="10"
      />
    </SvgCircular>
  </Loader>
);