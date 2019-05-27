import { css, FlattenSimpleInterpolation } from 'styled-components';

interface IMediaQuery {
  desktop: (args: string) => FlattenSimpleInterpolation;
  tablet: (args: string) => FlattenSimpleInterpolation;
  phone: (args: string) => FlattenSimpleInterpolation;

  large: (args: string) => FlattenSimpleInterpolation;
  medium: (args: string) => FlattenSimpleInterpolation;
  small: (args: string) => FlattenSimpleInterpolation;
}

// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const media: IMediaQuery = {
  desktop: (args: string) => mediaQueryTemplate(args, { minWidth: 1024 }),
  tablet: (args: string) => mediaQueryTemplate(args, { minWidth: 600, maxWidth: 1023 }),
  phone: (args: string) => mediaQueryTemplate(args, { maxWidth: 599 }),

  large: (args: string) => mediaQueryTemplate(args, { minWidth: 1024 }),
  medium: (args: string) => mediaQueryTemplate(args, { minWidth: 600 }),
  small: (args: string) => css`${args}`
}

const mediaQueryTemplate = (args: string, { minWidth, maxWidth }: { minWidth?: number, maxWidth?: number }) => {
  const minWidthQuery = minWidth !== undefined ? `(min-width: ${minWidth / 16}em)` : undefined;
  const maxWidthQuery = maxWidth !== undefined ? `(max-width: ${maxWidth / 16}em)` : undefined;

  const mediaQuery = [minWidthQuery, maxWidthQuery]
    .filter(value => value !== undefined)
    .join('and');

  return css`
    @media screen and ${mediaQuery} {
      ${css`${args}`}
    }
  `;
}