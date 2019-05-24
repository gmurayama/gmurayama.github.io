import React from 'react';
import styled from "styled-components";
import { TransitionProps } from "react-transition-group/Transition";
import { CSSTransition } from "react-transition-group";

interface IFadeProps {
  transitionDuration?: string;
  classNames?: string;
}

interface IProps extends TransitionProps, IFadeProps { }

const Fade = styled.div<IFadeProps>`
  display: none;
  opacity: 0;

  &.${props => classNameOrDefault(props.classNames)}-enter {
    display: block;
  }

  &.${props => classNameOrDefault(props.classNames)}-enter-done {
    opacity: 1;
    display: block;
    transition: opacity ${props => props.transitionDuration ? props.transitionDuration : '200ms'} ease-in;
  }

  &.${props => classNameOrDefault(props.classNames)}-exit {
    opacity: 1;
  }

  &.${props => classNameOrDefault(props.classNames)}-exit-done {
    display: none;
    opacity: 0;
    transition: opacity ${props => props.transitionDuration ? props.transitionDuration : '100ms'} ease-out;
  }
`;

export const FadeTransition = ({ transitionDuration, classNames, ...props }: IProps) =>
  <CSSTransition
    {...props}
    classNames={classNames}
  >
    <Fade
      transitionDuration={transitionDuration}
      classNames={classNames}
    >
      {props.children}
    </Fade>
  </CSSTransition>

const classNameOrDefault = (className?: string) => className ? className : 'fade';