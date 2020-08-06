import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home'
    };
    this.setView = this.setView.bind(this);
  }

  setView(view) {
    this.setState({
      view
    });
  }

  render() {
    const { view } = this.state;
    const { setView } = this;
    let element = null;
    switch (view) {
      case 'home':
        element = (
          <Home />
        );
        break;
      case 'portfolio':
        element = (
          <Portfolio />
        );
        break;
      case 'about':
        element = (
          <About />
        );
        break;
      case 'contact':
        element = (
          <Contact />
        );
        break;
    }
    return (
      <>
        <Header
          setView={setView}/>
        {element}
        <Footer />
      </>
    );
  }
}

export default App;
