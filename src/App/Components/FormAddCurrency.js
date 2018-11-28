import React, { Component } from 'react'
import connect from '../store/connect'

class AddCurrency extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const {
      name,
      value
    } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addCurrency(this.state.currency.toUpperCase())
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="currency"
            placeholder="Add Currency Here"
            aria-label="Add Currency Here"
            aria-describedby="button-addon2"
            onChange={this.handleInputChange}
          />
          
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" id="button-addon2">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(AddCurrency)