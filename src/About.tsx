import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  margin: 30px 0;
  p {
    margin: 0 0 5px;
  }
`;

const Title = styled.h2`
  margin: 0 0 5px;
  padding: 0;
`;

export const About: React.FC = () =>
    <Article>
        <Title>About</Title>
        <p>I'm a Software Developer currently working mainly with .NET tecnologies, focused in web based solutions.</p>
    </Article>