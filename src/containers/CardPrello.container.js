import { connect } from 'react-redux'
import CardPrello from '../components/CardPrello'
import { openModal } from '../actions/modal.action'


const mapStateToProps = (state, ownProps) => {
  return ({
    id: state.reducerCardPrello[ownProps.cardId].id,
    title: state.reducerCardPrello[ownProps.cardId].title
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: (id) => {
    dispatch(openModal(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPrello)