import React from 'react'

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let header = <p>Not found</p>;
        if(this.props.users[this.props.post.author_id]!=undefined && this.props.users[this.props.post.profile_id] != undefined){
            if(this.props.post.author_id === this.props.post.profile_id) {
                header = <p>{this.props.users[this.props.post.author_id].first_name}</p>
            } else {
                header = <p>{this.props.users[this.props.post.author_id].first_name} 
                            {this.props.users[this.props.post.profile_id].first_name}</p>
            } 
         }
        //  debugger;
        return(
            <div className="post">
                <div className="post-header">
                    {header}
                </div>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}

export default Post;