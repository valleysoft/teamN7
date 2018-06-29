import React from 'react';

class MainComponent extends React.Component {

        constructor(props) {
                super(props);
                //console.log(props);
        }
       
        render() {
                return (
                        <div className="container well">
                                Hello Webpack React
                        </div>
                );
        }

}

export default MainComponent;

