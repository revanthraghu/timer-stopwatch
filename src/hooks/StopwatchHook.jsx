import {useContext} from 'react'
import {TimeContext} from '../contexts/TimeContext'

function pad(n) {
    return ('0' + n).slice(-2)
}

let stopwatch_interval;

function useStopwatch() {
    
    function msToString(timer) {
        let ms = timer % 10;
        timer = (timer - ms) / 10
        let cs = timer % 100
        timer = (timer - cs) / 100
        let s = timer % 60
        timer = (timer - s) / 60
        let mins = timer % 60
        let hrs = (timer - mins) / 60
    
        return `${pad(hrs)}:${pad(mins)}:${pad(s)}:${pad(cs)}`
    }
    
    let {stopwatch, setStopwatch} = useContext(TimeContext)

    let time = msToString(stopwatch)

    const startStopwatch = () => {
        stopwatch_interval = setInterval(() => {
            setStopwatch(prevTimer => prevTimer + 10)}, 10)
    }

    const stopStopwatch = () => {
        //console.log(stopwatch)
        clearInterval(stopwatch_interval)
    }

    const resetStopwatch = () => {
        clearInterval(stopwatch_interval)
        setStopwatch(0)
    }

    return {time, startStopwatch, stopStopwatch, resetStopwatch}
}

export default useStopwatch