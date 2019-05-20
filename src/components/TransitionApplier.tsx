import { CSSTransition } from "react-transition-group";
import React from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

interface IProps extends CSSTransitionProps {
  children: JSX.Element[];
}

export const TransitionApplier = ({ children, ...props }: IProps) =>
  <>
    {children.map((child) =>
      <CSSTransition
        {...props}
      >
        {child}
      </CSSTransition>
    )}
  </>