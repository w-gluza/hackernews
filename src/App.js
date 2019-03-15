import React, { Component } from 'react';
import Frame from './components/Frame';

import './App.css';

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
      <div>
        <Frame links={links} />
      </div>
    );
  }
}

export default App;
