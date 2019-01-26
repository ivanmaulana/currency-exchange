import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeBaseValue } from '../store/actions'
import mapStateToProps from '../utils/mapState'

class BaseCurrency extends PureComponent {
  render() {
    const {
      base: {
        name,
        value
      },
      dictionaries,

      // actions
      changeBaseValue
    } = this.props

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <i>{ name } - { dictionaries.data[name] }</i>
          </h5>

          <div className="card-text">
            <div className="float-left pt-2">
              <b>{ name }</b>
            </div>

            <div className="float-right">
              <input
                type="number"
                min="0"
                className="form-control"
                value={value}
                onChange={(e) => changeBaseValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = mapStateToProps('app', ['base', 'dictionaries'])
const mapActions = { changeBaseValue }

export default connect(mapState, mapActions)(BaseCurrency)