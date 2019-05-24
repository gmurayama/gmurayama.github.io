import styled from 'styled-components';
import { media } from './../../themes/mediaQuery';

interface IProps extends React.HTMLAttributes<any> {
  smallColumns?: string | number;
  mediumColumns?: string | number;
  largeColumns?: string | number;
}

export const Container = styled.div<IProps>`
  display: grid;
  grid-gap: 15px;
  max-width: 80em;
  margin: 0 auto;
  width: 100%;
  padding: 15px;

  ${props => props.smallColumns &&
    media.phone(
      gridTemplateColumns(props.smallColumns)
    )
  }

  ${props => props.mediumColumns &&
    media.tablet(
      gridTemplateColumns(props.mediumColumns)
    )
  }

  ${props => props.largeColumns &&
    media.desktop(
      gridTemplateColumns(props.largeColumns)
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