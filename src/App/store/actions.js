import { fetchGet } from '../utils/fetchers'
import {
  DICTIONARIES_URL,
  RATES_URL
} from '../utils/constants'

export const CHANGE_BASE_VALUE = 'CHANGE_BASE_VALUE'
export const changeBaseValue = value => dispatch => {
  dispatch({
    type: CHANGE_BASE_VALUE,
    payload: value
  })
}

// DICTIONATIES ACTIONS
// -----------------------------------------

export const RECEIVED_DICTIONARIES = 'RECEIVED_DICTIONARIES'
const receivedDictionaries = response => dispatch => {
  dispatch({
    type: RECEIVED_DICTIONARIES,
    payload: response
  })
}

export const GET_DICTIONARIES = 'GET_DICTIONARIES'
export const getDictionaries = () => dispatch => {
  dispatch({
    type: GET_DICTIONARIES
  })

  fetchGet(DICTIONARIES_URL)
    .then(response => {
      dispatch(receivedDictionaries(response))
    })
}

// RATES ACTIONS
// -----------------------------------------

export const RECEIVED_RATES = 'RECEIVED_RATES'
const receivedRates = (response, rates) => dispatch => {
  if (response.error) {
    dispatch(removeCurrencies(rates[0]))
  }
  else {
    dispatch({
      type: RECEIVED_RATES,
      payload: {
        response,
        rates
      }
    })
  }
}

export const GET_RATES = 'GET_RATES'
export const getRates = (rates) => (dispatch, getState) => {
  if (!rates) {
    rates = getState().app.currencies
  }

  dispatch({
    type: GET_RATES,
    payload: rates
  })

  const URL = RATES_URL + rates.join(',')
  fetchGet(URL)
    .then(response => {
      dispatch(receivedRates(response, rates))
    })
}

// ADD / REMOVE RATES ACTIONS
// ------------------------------------------

export const REMOVE_CURRENCIES = 'REMOVE_CURRENCIES'
export const removeCurrencies = currency => dispatch => {
  dispatch({
    type: REMOVE_CURRENCIES,
    payload: currency
  })
}

// ADD CURRENCY FORM ACTIONS
// -----------------------------------------

export const TOGGLE_ADD_CURRENCY_FORM = 'TOGGLE_ADD_CURRENCY_FORM'
export const toggleAddCurrencyForm = toggle => dispatch => {
  dispatch({
    type: TOGGLE_ADD_CURRENCY_FORM,
    payload: toggle
  })
}

export const ADD_CURRENCY = 'ADD_CURRENCY'
export const addCurrency = (currency) => (dispatch, getState) => {
  const { currencies } = getState().app

  if (!currencies.includes(currency)) {
    dispatch({
      type: ADD_CURRENCY,
      payload: currency
    })
  
    dispatch(getRates([currency]))
  }
}

export default {
  changeBaseValue,
  getDictionaries,
  getRates,
  removeCurrencies,
  toggleAddCurrencyForm,
  addCurrency
}