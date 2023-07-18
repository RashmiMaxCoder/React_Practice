import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
    this.showError = this.showError.bind(this);
  }

  showError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      throw new Error("App crashed now and please retry");
    }

    return <button type="submit" onClick={this.showError}>Show Error</button>;
  }
}




