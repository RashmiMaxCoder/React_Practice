import React from "react";
import Content from "./Content";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h1>Example of Error Boundary</h1>
        <ErrorBoundary>
          <Content />
        </ErrorBoundary>
      </div>
    );
  }
}
