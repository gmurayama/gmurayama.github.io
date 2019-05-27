import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Card, CardHeader, CardTitle, CardSubtitle } from './components/Card';
import { Container } from './components/Container';
import { LoadingIcon } from './components/LoadingIcon';

interface IState {
  repositories: IRepository[];
}

interface IRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

const Article = styled.article`
  margin: 30px 0;
  p {
    margin: 0 0 5px;
  }
`;

const Title = styled.h2`
  margin: 0 0 15px;
  padding: 0;
`;

const StyledCardTitle = styled(CardTitle)`
  margin-bottom: 5px;
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

export class Projects extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = { repositories: [] };
  }

  componentDidMount = async () => {
    const response = await Axios.get<IRepository[]>('https://api.github.com/users/gmurayama/repos');
    const repositories = response.data;

    this.setState({ repositories });
  }

  render = () =>
    <Article>
      <Title>Projects</Title>
      {this.state.repositories.length === 0 && <LoadingIcon />}

      <StyledContainer medium="repeat(3, 2fr)">
        {this.state.repositories.map((repository) =>
          <Card key={repository.id}>
            <CardHeader>
              <StyledCardTitle>{repository.name}</StyledCardTitle>
              <CardSubtitle as="p">{repository.description}</CardSubtitle>
            </CardHeader>
          </Card>
        )}
      </StyledContainer>
    </Article>
}