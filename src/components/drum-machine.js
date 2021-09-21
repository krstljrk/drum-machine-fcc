import React from 'react'
import '../stylesheets/styles.scss'
import DrumPad from './drum-pad';



export default class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (btnID, text) => {
        /* document.getElementById(btnID).play();
        this.setState({
            active: text
        }) */
    }

    handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if ("QWEASDZXC".includes(key)) {
            document.getElementById(key).play();
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
            <div className="container-fluid" id="drum-machine">
                <div className="drum-pad-container">
                    <DrumPad handleClick={this.handleClick} handleKeyPress={this.handleKeyPress} />
                    {/* <div className="row first">
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id=""><audio
                                className='clip' />Q</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">W</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">E</button>
                        </div>
                    </div>
                    <div className="row second">
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">A</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">S</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">D</button>
                        </div>
                    </div>
                    <div className="row third">
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">Z</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">X</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-secondary drum-pad" id="">C</button>
                        </div>
                    </div> */}
                </div>
                <div className="display-container" id="display">
                    <h4>{this.state.active}</h4>
                </div>
            </div>
        )
    }

}
