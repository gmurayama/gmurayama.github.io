import React from 'react';
import { Container } from './components/Container';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from './About/About';
import './assets/icons.css';

const StyledContainer = styled(Container)`
  margin-top: 12.5%;
`;

const Name = styled.h1`
  font-size: 44px;
  font-weight: 300;
  margin: 0 0 6px;
`;

const Profession = styled.h2`
  font-size: 26px;
  font-weight: 300;
  margin: 0 0 4px 1px;
  position: relative;
  padding-bottom: 6px;

  ::after {
    content: '';
    border-bottom: 1px solid #d1d5de;
    width: 520px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const Presentation = styled.article`
  width: 100%;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Menu = styled.nav`
  text-align: right;

  ul {
    list-style: none;
    display: inline-block;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  ul li {
    padding: 12px;
  }
`;

const Socials = styled.ul`
  border-right: 1px solid #d1d5de;
  padding: 0 10px 0 0;
  margin: 0 6px 0 0;

  li span {
    font-size: 20px;
    vertical-align: text-bottom;
  }
`;

const Items = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0;
`;


const App: React.FC = () =>
  <StyledContainer gridTemplateColumns="10fr 3fr">
    <Router>

      <Presentation>
        <Name>Gustavo Murayama</Name>
        <Profession>Software Developer</Profession>

        <Route path="/about" component={About} />
      </Presentation>

      <Menu>
        <Socials>
          <li>
            <a href="https://www.linkedin.com/in/gmurayama" target="_blank">
              <span className="icon-linkedin"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/gmurayama" target="_blank">
              <span className="icon-github"></span>
            </a>
          </li>
          <li>
            <a href="mailto:gmurayama@outlook.com">
              <span className="icon-email"></span>
            </a>
          </li>
        </Socials>
        <Items>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </Items>
      </Menu>
    </Router>
  </StyledContainer>;

export default App;