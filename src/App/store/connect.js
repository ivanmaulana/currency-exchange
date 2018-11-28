import { connect } from 'react-redux'
import actions from './actions'

const connectToRedux = (Component) => {
  const mapStateToProps = ({ app }) => app
  const mapDispatchToProps = actions

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}

export default connectToRedux