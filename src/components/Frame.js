import React, { Component } from 'react';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      frameUrl: [],
      frameID: [],
      fetching: false
    };
  }

  componentWillMount() {
    this.setState({ fetching: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.links === this.props.links) {
      return;
    }

    let links = this.props.links;
    // this.setState({ fetching: true });
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
  componentDidMount() {
    this.setState({ fetching: false });
  }
  render() {
    if (this.state.fetching === true) {
      return <div>FETCHING</div>;
    } else {
      return (
        <main className="main">
          <aside className="stories__preview">
            {this.state.articles.map(object => (
              <div key={object.id} id={object.id}>
                <h2>{object.title}</h2>
                <button
                  onClick={() => {
                    this.setState({ frameUrl: object.url, frameID: object.id });
                  }}
                  style={
                    this.state.frameID === object.id
                      ? { backgroundColor: 'aqua' }
                      : { backgroundColor: 'green' }
                  }
                >
                  See More
                </button>
              </div>
            ))}
          </aside>
          <article className="article__preview">
            <iframe
              className="iframe"
              title={this.state.frameID}
              key={this.state.frameID}
              src={this.state.frameUrl}
            />
            <p>{this.state.frameID}</p>
          </article>
        </main>
      );
    }
  }
}
export default Frame;
