import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleAddCurrencyForm } from '../store/actions'
import mapStateToProps from '../utils/mapState'

class BtnAddCurrency extends PureComponent {
  render() {
    return (
      <button className="btn btn-block btn-success" onClick={() => this.props.toggleAddCurrencyForm(true)}>
        (+) Add More Currencies
      </button>
    );
  }
}

const mapState = mapStateToProps('app', ['base', 'dictionaries'])
const mapActions = { toggleAddCurrencyForm }

export default connect(mapState, mapActions)(BtnAddCurrency)