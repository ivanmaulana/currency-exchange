import React, { Component } from 'react'
import connect from '../store/connect'

class BaseCurrency extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.changeBaseValue(event.target.value)
  }

  render() {
    const {
      base: {
        name,
        value
      },
      dictionaries
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
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(BaseCurrency)