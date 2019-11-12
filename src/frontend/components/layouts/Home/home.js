import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Home = props => {

  const code = `
  class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`;

  return (
    <div>
      <LiveProvider code="<strong>Hello World!</strong>">
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};

export default Home;
