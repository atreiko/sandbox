import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import Error500 from '../Error500/Error500';

class ErrorBoundary extends PureComponent {
  state = {
    errorPresent: false
  }

  // componentDidCatch(error, errorInfo) {
  //   axios.post('/api/errors', JSON.stringify({error, errorInfo}))
  //   this.setState({ errorPresent: true })
  // }

  static getDerivedStateFromError(error) {
    return { errorPresent: true }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { errorPresent } = prevState;

    if (errorPresent && location.pathname !== prevProps.location.pathname) {
      this.setState({ errorPresent: false });
    }
  }

  render() {
    const { errorPresent } = this.state;
    const { children } = this.props;

    // console.log(this)

    if (errorPresent) {
      return <Error500 />
    }

    return children
  }
}

export default withRouter(ErrorBoundary)