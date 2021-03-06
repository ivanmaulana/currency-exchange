import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { removeCurrencies } from '../store/actions'
import { formatCurrency } from '../utils/formats'
import mapStateToProps from '../utils/mapState'
import Spinner from './Spinner'

class Currency extends PureComponent {
  render() {
    const {
      rates,
      dictionaries,
      base,
      currency,

      // actions
      removeCurrencies
    } = this.props

    const isLoading = rates.currenciesLoading.includes(currency)

    return (
      <div className="card mb-2">
        <div className="row">
          <div className="col col-9 border-right">
            <div className="card-body">
              <h5 className="card-title">
                <div className="float-left">
                  { currency }
                </div>
                <div className="float-right">
                  <Spinner isLoading={isLoading}>
                    { formatCurrency(base.value * rates.data[currency]) }
                  </Spinner>
                </div>
              </h5>
              <div className="clearfix" />

              <div className="card-text mt-3">
                <div>
                  <b><i>{ currency } - { dictionaries.data[currency] }</i></b>
                </div>
                <div>
                  <Spinner isLoading={isLoading}>
                    1 { base.name } = { currency } { formatCurrency(rates.data[currency]) }
                  </Spinner>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-3 pr-4">
            <div className="row h-100">
              <div className="col-sm-12 my-auto text-center">
                <button className="btn btn-default" onClick={() => removeCurrencies(currency)}>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const reducer = 'app'
const selectedStates = ['rates', 'dictionaries', 'base']

const mapState = mapStateToProps(reducer, selectedStates)
const mapActions = { removeCurrencies }

export default connect(mapState, mapActions)(Currency)