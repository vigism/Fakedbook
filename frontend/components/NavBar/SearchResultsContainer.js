import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = state => ({
    res: state.entities.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)