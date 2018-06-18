import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators, Dispatch } from 'redux'

import { fetchMissionsInfo } from '../../actions/session'
import Missions, { DispatchProps, StateProps } from '../../components/academy/Missions'
import { IState } from '../../reducers/states'

const mapStateToProps: MapStateToProps<StateProps, {}, IState> = state => {
  return {
    missionsInfo: state.session.missionsInfo
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      handleMissionsInfoFetch: fetchMissionsInfo
    },
    dispatch
  )

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Missions))