import styled from 'styled-components';
import { media } from './../../themes/mediaQuery';

interface IProps extends React.HTMLAttributes<any> {
  small?: string | number;
  medium?: string | number;
  large?: string | number;
}

export const Container = styled.div<IProps>`
  display: grid;
  grid-gap: 15px;
  max-width: 80em;
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;

  ${props => props.small &&
    media.small(
      gridTemplateColumns(props.small)
    )
  }

  ${props => props.medium &&
    media.medium(
      gridTemplateColumns(props.medium)
    )
  }

  ${props => props.large &&
    media.large(
      gridTemplateColumns(props.large)
    )
  }
`;

const gridTemplateColumns = (args: string | number): string => {
  switch (typeof args) {
    case 'string':
      return `grid-template-columns: ${args}`;
    case 'number':
      return `grid-template-columns: repeat(${args}, 1fr);`;
  }
}