import React from 'react';

import LevelThreeComponent from './LevelThreeComponent.jsx'

class LevelOneComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            
        }                   
    }

    render(){
        return (
            <div className="well">
            <p>I'm Level Two Component</p>
            <LevelThreeComponent counterFun={this.props.counterFun} />
            </div>
        );
    }
}

export default LevelOneComponent;