import React from 'react';
import LevelTwoComponent from './LevelTwoComponent.jsx'

class LevelOneComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            
        }                   
    }

    render(){
        return (
            <div className="border-right-0">
            <p>I'm Level one Component</p>
            <LevelTwoComponent counterFun={this.props.counterFun} />
            </div>
        );
    }
}

export default LevelTwoComponent;