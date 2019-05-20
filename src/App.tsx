import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from './About/About';
import { Container } from './components/Container';
import { TransitionApplier } from './components/TransitionApplier';
import './assets/icons.css';
import { CSSTransition } from 'react-transition-group';

interface IState {
  openContent: boolean;
}

const StyledContainer = styled(Container)`
  margin-top: 12.5%;
`;

const Name = styled.h1`
  font-weight: 300;
  margin: 0 0 6px;
  font-size: 44px;

  &.change-font-size-enter-done {
    font-size: 24px;
    transition: font-size 200ms ease-in-out;
  }

  &.change-font-size-exit {
    font-size: 24px;
  }

  &.change-font-size-exit-done {
    font-size: 44px;
    transition: font-size 200ms ease-in-out;
  }
`;

const Profession = styled.h2`
  font-size: 26px;
  font-weight: 300;
  margin: 0 0 4px 1px;
  position: relative;
  padding-bottom: 6px;
  transition: font-size 200ms ease-in-out;

  &.change-font-size-enter-done {
    font-size: 20px;
    transition: font-size 200ms ease-in-out;
  }

  &.change-font-size-exit {
    font-size: 20px;
  }

  &.change-font-size-exit-done {
    font-size: 26px;
    transition: font-size 200ms ease-in-out;
  }

  &::after {
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

const Fade = styled.div`
  opacity: 0;

  &.fade-enter-done {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-done {
    opacity: 0;
    transition: opacity 100ms ease-out;
  }
`;

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { openContent: false };
  }

  render = () =>
    <StyledContainer gridTemplateColumns="10fr 3fr">
      <Router>

        <Presentation>
          <TransitionApplier
            in={this.state.openContent}
            timeout={0}
            classNames="change-font-size"
          >
            <Name>Gustavo Murayama</Name>
            <Profession>Software Developer</Profession>
          </TransitionApplier>

          <CSSTransition
            in={this.state.openContent}
            timeout={ { enter: 100, exit: 0 }}
            classNames="fade"
          >
            <Fade>
              <Route path="/about" component={About} />
            </Fade>
          </CSSTransition>
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
            <li><Link to="/about" onClick={() => this.setState({ openContent: !this.state.openContent })}>About me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </Items>
        </Menu>
      </Router>
    </StyledContainer>;
}

export default App;