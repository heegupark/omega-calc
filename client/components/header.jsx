import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super();
    this.handleClickHomeMenu = this.handleClickHomeMenu.bind(this);
    this.handleClickPortfolioMenu = this.handleClickPortfolioMenu.bind(this);
    this.handleClickAboutMenu = this.handleClickAboutMenu.bind(this);
    this.handleClickContactMenu = this.handleClickContactMenu.bind(this);
  }

  handleClickHomeMenu() {
    this.props.setView('home');
  }

  handleClickPortfolioMenu() {
    this.props.setView('portfolio');
  }

  handleClickAboutMenu() {
    this.props.setView('about');
  }

  handleClickContactMenu() {
    this.props.setView('contact');
  }

  render() {
    const {
      handleClickHomeMenu,
      handleClickPortfolioMenu,
      handleClickAboutMenu,
      handleClickContactMenu
    } = this;
    return (
      <header className="header-bg-custom">
        <Navbar collapseOnSelect bg="transparent" expand="lg" variant="dark">
          <Navbar.Brand href="#home" onClick={handleClickHomeMenu}>
            <span className="heegu">heegu.net</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={handleClickHomeMenu}>home</Nav.Link>
              <Nav.Link href="#portfolio" onClick={handleClickPortfolioMenu}>
                <span>portfolio</span>
                <span className="badge text-primary bg-transparent ">updated</span>
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleClickAboutMenu}>
                <span>about</span>
                {/* <span className="badge text-primary bg-transparent ">updated</span> */}
              </Nav.Link>
              <Nav.Link href="#link" onClick={handleClickContactMenu}>contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
