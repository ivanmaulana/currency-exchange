import React, { Component } from 'react';
import BaseCurrency from './Components/BaseCurrency'
import Currency from './Components/Currency'
import FormAddCurrency from './Components/FormAddCurrency'
import BtnAddCurrency from './Components/BtnAddCurrency'
import connect from './store/connect'

class App extends Component {
  componentDidMount() {
    this.props.getDictionaries()
    this.props.getRates()
  }

  render() {
    const {
      currencies,
      isOpenAddCurrencyForm
    } = this.props
    
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <BaseCurrency />
            <hr />

            {currencies.map(currency => 
              <Currency
                key={currency}
                currency={currency}
              />  
            )}

            { isOpenAddCurrencyForm ?
              <FormAddCurrency /> :
              <BtnAddCurrency />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(App);
