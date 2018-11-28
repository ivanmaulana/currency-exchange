import initialState from "./state";
import {
  CHANGE_BASE_VALUE,
  GET_DICTIONARIES,
  RECEIVED_DICTIONARIES,
  GET_RATES,
  RECEIVED_RATES,
  REMOVE_CURRENCIES,
  TOGGLE_ADD_CURRENCY_FORM,
  ADD_CURRENCY
} from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case CHANGE_BASE_VALUE:
    return {...state,
      base: {...state.base,
        value: payload
      }
    }

  // DICTIONATIES RECUERS
  // -----------------------------------------

  case GET_DICTIONARIES:
    return {...state,
      dictionaries: {...state.dictionaries,
        isGettingData: true
      }
    }
  case RECEIVED_DICTIONARIES:
    return {...state,
      dictionaries: {
        isGettingData: false,
        data: payload
      }
    }


  // RATES RECUERS
  // -----------------------------------------
  
  case GET_RATES:
    return {...state,
      rates: {...state.rates,
        currenciesLoading: [...payload]
      }
    }
  case RECEIVED_RATES:
    return {...state,
      rates: {
        currenciesLoading: state.rates.currenciesLoading.filter(currency => !payload.rates.includes(currency)),
        data: {...state.rates.data,
          ...payload.response.rates
        }
      }
    }

  // ADD / REMOVE RATES REDUCERS
  // ------------------------------------------

  case REMOVE_CURRENCIES:
    return {...state,
      currencies: state.currencies.filter(currency => currency !== payload)
    }

  // ADD CURRENCY FORM REDUCERS
  // ------------------------------------------

  case TOGGLE_ADD_CURRENCY_FORM:
    return {...state,
      isOpenAddCurrencyForm: payload
    }

  case ADD_CURRENCY:
    return {...state,
      currencies: [...state.currencies, payload]
    }

  default:
    return state
  }
}