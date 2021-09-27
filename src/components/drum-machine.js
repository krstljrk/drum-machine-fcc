import React from 'react'
import '../stylesheets/styles.scss'
import DrumPad from './drum-pad';



export default class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }
        
    }
    componentDidMount() {
        document.addEventListener("keydown", this.drumItemPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.drumItemPress);
    }

    render() {
        return (
            <div  className="container-fluid" id="drum-machine">
                <div className="drum-pad-container">
                    <DrumPad />
                </div>
                <div className="display-container" id="display">
                    <h4>{this.state.active}</h4>
                </div>
            </div>
        )
    }

}
