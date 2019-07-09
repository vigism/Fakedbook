import React from 'react'

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="post"><p>{this.props.content}</p></div>
        )
    }
}

export default Post;