import React from 'react'
import '../stylesheets/styles.scss'

const AudioObject = [
    {

    },
    {

    },
    {

    },
    {

    },
]

export default function DrumMachine() {

    return (
        <div className="container-fluid" id="drum-machine">
            <div className="drum-pad-container">
                <div className="row first">
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">Q</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">W</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">E</button>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">A</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">S</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">D</button>
                    </div>
                </div>
                <div className="row third">
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">Z</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">X</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id="">C</button>
                    </div>
                </div>
            </div>
            <div className="display-container" id="display">
                <h4>Placeholder for audio description</h4>
            </div>
        </div>
    )
}
