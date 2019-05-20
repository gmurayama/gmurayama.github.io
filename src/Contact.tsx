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

export const Contact: React.FC = () =>
    <Article>
        <Title>Contact</Title>
        <p>Feel free to contact me through e-mail (<a href="mailto:gmurayama@outlook.com">gmurayama@outlook.com</a>) or any other social media listed aside!</p>
    </Article>