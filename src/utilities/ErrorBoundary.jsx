import React, { Fragment } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <>
          <h3>Something went wrong.</h3>
          <details css='whiteSpace: pre-wrap'>
            <br />
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo.componentStack}
          </details>
          <br />
        </>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
