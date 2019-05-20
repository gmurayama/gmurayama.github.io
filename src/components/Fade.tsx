import styled from "styled-components";

export const Fade = styled.div`
  opacity: 0;

  &.fade-enter-done {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-done {
    opacity: 0;
    transition: opacity 100ms ease-out;
  }
`;