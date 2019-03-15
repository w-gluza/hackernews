import React, { Component } from 'react';

import Main from '../styledComponents/Main';
import Author from '../styledComponents/Author';
import Button from '../styledComponents/Button';
import Story from '../styledComponents/Story';
import StoryFooter from '../styledComponents/StoryFooter';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      frameUrl: [],
      frameID: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.links === this.props.links) {
      return;
    }

    let links = this.props.links;
    links.map((link, linkIndex) =>
      fetch(link)
        .then(response => response.json())
        .then(data =>
          this.setState(state => {
            const frameUrl = state.frameUrl ? state.frameUrl : data.url;
            const frameID = state.frameID ? state.frameID : data.id;
            const articles = state.articles;
            articles[linkIndex] = data;
            frameUrl[linkIndex] = data.url;
            frameID[linkIndex] = data.id;
            return { articles, frameUrl, frameID };
          })
        )
    );
  }

  render() {
    return (
      <Main>
        <aside className="aside">
          {this.state.articles.map(object => (
            <Story key={object.id} id={object.id}>
              <h2>{object.title}</h2>
              <StoryFooter>
                <Author>Posted by: {object.by}</Author>
                <Button
                  onClick={() => {
                    this.setState({
                      frameUrl: object.url,
                      frameID: object.id
                    });
                  }}
                  style={
                    this.state.frameID === object.id
                      ? { color: '#ffc124' }
                      : { color: '#424242' }
                  }
                >
                  Visit Website
                </Button>
              </StoryFooter>
            </Story>
          ))}
        </aside>
        <article>
          <iframe
            className="iframe"
            title={this.state.frameID}
            key={this.state.frameID}
            src={this.state.frameUrl}
          />
        </article>
      </Main>
    );
  }
}
export default Frame;
