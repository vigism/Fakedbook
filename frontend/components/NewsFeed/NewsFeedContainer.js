import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';


const mapStateToProps = state => {
    return {
        first_name: state.entities.users[state.session.id].first_name,
        last_name: state.entities.users[state.session.id].last_name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);