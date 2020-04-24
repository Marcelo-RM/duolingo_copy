import React from 'react';

export default class trainingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flagSelected: 'usa'
        };
    };

    updateFlag = (flag) => {
        this.setState({
            flagSelected: flag
        });
    };

    render = () => {
        return (
            <div>
                Teste
            </div>
        );
    };
}