import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LevelThreeComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
       
    }

    render() {
        return (
            <div className="well">
                <p>I'm Level Three Component</p>
                <p>Child Count: {this.props.childCounterValue}</p>
                <button onClick={this.props.counterFunc}> Main Counter </button>
            </div>
        );
    }
}


function mapStateToProps(state){
        return{
                childCounterValue: state.childCounter
        }
}

function mapDispatchToProps(dispatch){
        return{
                counterFunc: function(){dispatch({type:'INCREMENT_MAIN'})}
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(LevelThreeComponent);

