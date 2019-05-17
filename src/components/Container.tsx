import styled from 'styled-components';

interface IProps extends React.HTMLAttributes<any> {
    gridTemplateColumns?: string;
}

export const Container = styled.div<IProps>`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns == null ? "repeat(12, 1fr)" : props.gridTemplateColumns};
    grid-gap: 15px;
    max-width: 80em;
    margin: 0 auto;
    width: 100%;
`;