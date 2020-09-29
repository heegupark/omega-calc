import React, { Component } from 'react';
import Main from '../components/main';
import IndexPage from '../components/index-page';

export default class extends Component {
  render() {
    return (
      <>
        <IndexPage />
        <Main />
      </>
    );
  }
}
