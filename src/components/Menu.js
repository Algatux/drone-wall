import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Menu extends Component {
    render(){
        return(
            <div className="wall-menu">
                <AppBar
                    title="Drone wall"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        );
    }
}

export default Menu;