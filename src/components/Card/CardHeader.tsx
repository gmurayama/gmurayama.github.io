import React from 'react';
import styled from 'styled-components';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
}

export const CardSubtitle = styled.h4`
  margin-top: 0;
  color: #686868;
  font-size: 14px;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
`;

const Header = styled.header`
  padding: 15px;
`;

export const CardHeader = (props: IProps) => {
  const { title, subtitle, ...headerProps } = props;

  return (
    <Header {...headerProps}>
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {headerProps.children}
    </Header>
  );
}