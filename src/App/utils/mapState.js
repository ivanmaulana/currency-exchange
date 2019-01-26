function mapStateToProps(reducer, selectedStates) {
  return (state) => {
    return selectedStates.reduce((acc, curr) => ({...acc,
      [curr]: state[reducer][curr]
    }), {})
  }
}

export default mapStateToProps