import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { About } from './About';
import { Container } from './components/Container/Container';
import { TransitionApplier } from './components/Transitions/TransitionApplier';
import './assets/icons.css';
import { FadeTransition } from './components/Transitions/Fade';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Nav, IconMenu, TextMenu, NavLink } from './components/Menu';
import { media } from './themes/mediaQuery';
import { RouterProps, RouteComponentProps } from 'react-router';

interface IState {
  showContent: boolean;
  resizePresentation: boolean;
  lastEventTargetClicked?: EventTarget;
}

const StyledContainer = styled(Container)`
  ${media.small(`
    margin-top: 25%;
  `)}

  ${media.medium(`
    margin-top: 12.5%;
  `)}
`;

const Name = styled.h1`
  font-weight: 300;
  margin: 0 0 6px;
  font-size: 2.75rem;

  &.change-font-size-enter-done {
    font-size: 1.75rem;
    transition: font-size 200ms ease-in-out;
  }

  &.change-font-size-exit {
    font-size: 1.75rem;
  }

  &.change-font-size-exit-done {
    font-size: 2.75rem;
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
    transition: font-size 180ms ease-in-out;
  }

  &.change-font-size-exit {
    font-size: 20px;
  }

  &.change-font-size-exit-done {
    font-size: 26px;
    transition: font-size 180ms ease-in-out;
  }

  &::after {
    content: '';
    border-bottom: 1px solid #d1d5de;
    width: 520px;
    max-width: 100%;
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

class App extends React.Component<RouteComponentProps<string>, IState> {
  constructor(props: RouteComponentProps<string>) {
    super(props);

    this.state = {
      showContent: false,
      resizePresentation: false,
      lastEventTargetClicked: undefined
    };
  }

  componentDidMount = () => {
    const closedContent = this.props.location.pathname === '/';
    this.setState({ showContent: !closedContent, resizePresentation: !closedContent });
  }

  changeContent = (e: React.SyntheticEvent<EventTarget>) => {
    const eventTarget = e.target;
    const closeContent = this.state.showContent && this.state.lastEventTargetClicked === eventTarget;

    this.setState((prevState) =>
      ({ showContent: !prevState.showContent, lastEventTargetClicked: eventTarget }),
      () => { this.setState({ showContent: !closeContent, resizePresentation: !closeContent }); }
    );
  }

  render = () =>
    <StyledContainer
      small={1}
      medium="10fr 3fr"
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Presentation>
          <TransitionApplier
            in={this.state.resizePresentation}
            timeout={0}
            classNames="change-font-size"
          >
            <Name>Gustavo Murayama</Name>
            <Profession>Software Developer</Profession>
          </TransitionApplier>

          <FadeTransition
            in={this.state.showContent}
            timeout={{ enter: 100, exit: 0 }}
            classNames="fade"
          >
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </FadeTransition>
        </Presentation>

        <Nav>
          <IconMenu>
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
          </IconMenu>
          <TextMenu>
            <li><NavLink to="/about" onClick={this.changeContent}>About me</NavLink></li>
            <li><NavLink to="/projects" onClick={this.changeContent}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={this.changeContent}>Contact</NavLink></li>
          </TextMenu>
        </Nav>
      </BrowserRouter>
    </StyledContainer>;
}

export default App;