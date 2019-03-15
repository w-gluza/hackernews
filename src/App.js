import React, { Component } from 'react';
import Frame from './components/Frame';
import Header from './components/Header';

import GlobalStyle from './styledComponents/Global';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    const topStories = this.state.data.slice(0, 10);
    // console.log(topStories);
    let links = topStories.map(
      link =>
        ' https://hacker-news.firebaseio.com/v0/item/' +
        link +
        '.json?print=pretty'
    );
    return (
      <>
        <GlobalStyle />
        <Header />
        <Frame links={links} />
      </>
    );
  }
}

export default App;
