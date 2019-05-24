import { css, FlattenSimpleInterpolation } from 'styled-components';

interface IMediaQuery {
  desktop: (args: string) => FlattenSimpleInterpolation;
  tablet: (args: string) => FlattenSimpleInterpolation;
  phone: (args: string) => FlattenSimpleInterpolation;
}

// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const media: IMediaQuery = {
  desktop: (args: string) => mediaQueryTemplate(args, 1024),
  tablet: (args: string) => mediaQueryTemplate(args, 600),
  phone: (args: string) => css`${args}`
}

const mediaQueryTemplate = (args: string, minWidth: number) =>
  css`
    @media (min-width: ${minWidth / 16}em) {
      ${css`${args}`}
    }
  `