import React from 'react'
import '../stylesheets/styles.scss'

const AudioObject = [
    {
        keyCode: 81,
        trigger: 'Q',
        textID: 'Bass drum 1',
        id: 'bass-drum-1',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-3.mp3'
    },
    {
        keyCode: 87,
        trigger: 'W',
        textID: 'Electronic kick',
        id: 'electronic-kick',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-kick-distorted-5.mp3'
    },
    {
        keyCode: 69,
        trigger: 'E',
        textID: 'Snare roll',
        id: 'snare-roll',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-snare-roll-long.mp3'
    },
    {
        keyCode: 65,
        trigger: 'A',
        textID: 'Short hit',
        id: 'short-hit',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-hi-hat-14-inch-6.mp3'
    },
    {
        keyCode: 83,
        trigger: 'S',
        textID: 'Bass drum 2',
        id: 'bass-drum-2',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-2.mp3'
    },
    {
        keyCode: 68,
        trigger: 'D',
        textID: 'Crash cymbal',
        id: 'crash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-crash-cymbal-16-inch-3.mp3'
    },
    {
        keyCode: 90,
        trigger: 'Z',
        textID: 'Snare punch',
        id: 'snare-punch',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-snare-punch.mp3'
    },
    {
        keyCode: 88,
        trigger: 'X',
        textID: 'Splash cymbal',
        id: 'splash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-splash-cymbal-10-inch-3.mp3'
    },
    {
        keyCode: 67,
        trigger: 'C',
        textID: 'Drum floor',
        id: 'drum-floor',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-tom-floor-4.mp3'
    }
]

export default class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick = (id) => {
        /* audioRef.current.play(); */
        this[id].play();
        this[id].currentTime = 0;
    }

    handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if ("QWEASDZXC".includes(key)) {
            /* this.audio.play; */
            document.getElementById(key).play();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    render() {
        const DrumPad = AudioObject.map((key) => (
            <div>
                <button
                    className="drum-pad"
                    id={key.id}
                    onClick={() => {
                        this.handleClick(key.id);
                    }}
                /* onKeyDown={() => {
                    this.handleKeyPress(key.trigger, key.id)
                }} */
                > {key.trigger}
                    <audio ref={ref => this[key.id] = ref} className="clip" id={key.trigger} src={key.source} />
                </button>
            </div>
        ))
        return (
            <div className="container-fluid" id="drum-machine">
                <div className="drum-pad-container">
                    {DrumPad}
                </div>
                <div className="display-container" id="display">
                    <h4>{this.state.active}</h4>
                </div>
            </div>
        )
    }

}
