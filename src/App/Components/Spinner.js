import React, { PureComponent } from 'react'

class Spinner extends PureComponent {
  render() {
    if (!this.props.isLoading) return this.props.children
    
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }
}

export default Spinner