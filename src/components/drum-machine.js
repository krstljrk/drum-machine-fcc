import React from 'react'
import '../stylesheets/styles.scss'

const AudioObject = [
    {
        keyCode: 81,
        trigger: 'Q',
        id: 'bass-drum-1',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-3.mp3'
    },
    {
        keyCode: 87,
        trigger: 'W',
        id: 'electronic-kick',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-kick-distorted-5.mp3'
    },
    {
        keyCode: 69,
        trigger: 'E',
        id: 'snare-roll',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-snare-roll-long.mp3'
    },
    {
        keyCode: 65,
        trigger: 'A',
        id: 'short-hit',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-hi-hat-14-inch-6.mp3'
    },
    {
        keyCode: 83,
        trigger: 'S',
        id: 'bass-drum-2',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-2.mp3'
    },
    {
        keyCode: 68,
        trigger: 'D',
        id: 'crash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-crash-cymbal-16-inch-3.mp3'
    },
    {
        keyCode: 90,
        trigger: 'Z',
        id: 'snare-punch',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-snare-punch.mp3'
    },
    {
        keyCode: 88,
        trigger: 'X',
        id: 'splash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-splash-cymbal-10-inch-3.mp3'
    },
    {
        keyCode: 67,
        trigger: 'C',
        id: 'drum-floor',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-tom-floor-4.mp3'
    }
]

export default function DrumMachine() {

    return (
        <div className="container-fluid" id="drum-machine">
            <div className="drum-pad-container">
                <div className="row first">
                    <div className="col-4">
                        <button className="btn btn-default btn-outline-secondary drum-pad" id=""><audio
                            className='clip'/>Q</button>
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
