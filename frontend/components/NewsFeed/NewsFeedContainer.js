import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';


const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id]
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);