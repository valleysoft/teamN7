import React from 'react';
import PropTypes from 'prop-types';
import LevelOneComponent from './LevelOneComponent.jsx';
import { connect } from 'react-redux';


class App extends React.Component {

        constructor(props) {
                super(props);
                console.log(props);
        }

       
        render() {
                return (
                        <div className="container well">
                                <p>Main Count: {this.props.mainCounterValue} </p>
                                <button onClick={this.props.counterFunc}> Child Counter </button>
                                <LevelOneComponent  />
                        </div>
                );
        }

}

function mapStateToProps(state){
        return{
                mainCounterValue: state.mainCounter
        }
}

function mapDispatchToProps(dispatch){
        return{
                counterFunc: function(){dispatch({type:'INCREMENT_CHILD'})}
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
