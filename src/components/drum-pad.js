import React from 'react'
import { useRef } from 'react'

const AudioObject = [
    {
        keyCode: 81,
        trigger: 'Q',
        textID: 'Bass drum 1',
        btnID: 'bass-drum-1',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-3.mp3'
    },
    {
        keyCode: 87,
        trigger: 'W',
        textID: 'Electronic kick',
        btnID: 'electronic-kick',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-kick-distorted-5.mp3'
    },
    {
        keyCode: 69,
        trigger: 'E',
        textID: 'Snare roll',
        btnID: 'snare-roll',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-snare-roll-long.mp3'
    },
    {
        keyCode: 65,
        trigger: 'A',
        textID: 'Short hit',
        btnID: 'short-hit',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-hi-hat-14-inch-6.mp3'
    },
    {
        keyCode: 83,
        trigger: 'S',
        textID: 'Bass drum 2',
        btnID: 'bass-drum-2',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-bass-drum-2.mp3'
    },
    {
        keyCode: 68,
        trigger: 'D',
        textID: 'Crash cymbal',
        btnID: 'crash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-crash-cymbal-16-inch-3.mp3'
    },
    {
        keyCode: 90,
        trigger: 'Z',
        textID: 'Snare punch',
        btnID: 'snare-punch',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-electronic-snare-punch.mp3'
    },
    {
        keyCode: 88,
        trigger: 'X',
        textID: 'Splash cymbal',
        btnID: 'splash-cymbal',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-splash-cymbal-10-inch-3.mp3'
    },
    {
        keyCode: 67,
        trigger: 'C',
        textID: 'Drum floor',
        btnID: 'drum-floor',
        source: 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-tom-floor-4.mp3'
    }
]

export default function DrumPad() {

    const audioRef = useRef(null)

    /*
    componentDidMount() {
        document.addEventListener("keydown", this.drumItemPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.drumItemPress);
    }

    // SOURCE OF PROBLEM:
    handleClick = (id) => {
        this.audioRef.current.play();
    }

    handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if ("QWEASDZXC".includes(key)) {
            /* this.audio.play; 
            document.getElementById(key).play();
        }
    } */
    const handleClick = () => {
        audioRef.current.play();
    }

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if ("QWEASDZXC".includes(key)) {
            /* this.audio.play; */
            document.getElementById(key).play();
        }
    }

    return (
        <div>
            {AudioObject.map((drumPad) => (
                <div key={drumPad.btnID}>
                    <button className="drum-pad" id={drumPad.btnID} onClick={handleClick} onKeyDown={handleKeyPress}> {drumPad.trigger}
                        <audio ref={audioRef} className="clip" id={drumPad.trigger} src={drumPad.source} />
                    </button>
                </div>
            ))}
        </div>

    )



}
