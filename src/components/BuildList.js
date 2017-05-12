import React from 'react';
import ClientComponent from './../class/ClientComponent';
import BuildRow from './BuildRow';

class BuildList extends ClientComponent {

    constructor(props) {
        super(props);
        this.state = {
            builds : []
        };
    }

    componentWillMount() {
        this.getClient().getBuilds(this.props.owner, this.props.name).then((repos) => {
            this.setState({
                builds: repos.map((el) => {return el;})
            });
        });
    }

    render() {
        return (
            <div className="build-list">
                {this.state.builds.map(function(build, key){
                    return (
                        <BuildRow build={build} key={key}/>
                    );
                })}

            </div>
        );
    }
}

export default BuildList;
