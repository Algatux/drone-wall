import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar'

class Author extends Component {

    render() {
        return (
            <div className="author">
                <Avatar src={this.props.avatar} />
                <span>
                    {this.props.name}
                </span>
            </div>
        );
    }
}

export default Author;
