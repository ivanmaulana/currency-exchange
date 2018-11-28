import React, { PureComponent } from 'react'
import connect from '../store/connect'

class BtnAddCurrency extends PureComponent {
  render() {
    return (
      <button className="btn btn-block btn-success" onClick={() => this.props.toggleAddCurrencyForm(true)}>
        (+) Add More Currencies
      </button>
    );
  }
}

export default connect(BtnAddCurrency)