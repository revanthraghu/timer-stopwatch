import {useContext} from 'react'
import {TimeContext} from '../contexts/TimeContext'

function pad(n) {
    return ('0' + n).slice(-2)
}

function msToString(timer) {
    let ms = timer % 1000;
    timer = (timer - ms) / 1000
    let s = timer % 60
    timer = (timer - s) / 60
    let mins = timer % 60
    let hrs = (timer - mins) / 60

    return `${pad(hrs)}:${pad(mins)}:${pad(s)}`
}

let time_interval;

export default function useTimer(initialState) {
    
    //let {timer, stopTimer, startTimer, resetTimer, setTimer} = useContext(TimeContext)
    
    let timerProps = useContext(TimeContext)

    // useEffect(() => setTimer(initialState), [initialState])

    let time = msToString(timerProps.timer)

    // useEffect(() => {
    //     console.log('here')
    //     //timerProps.setTimer(initialState)
    //     return () => {
    //         console.log('unmounting')
    //         //clearInterval(time_interval)
    //     }
    // }, [])

    const startTimer = () => {
        time_interval = setInterval(() => {
            timerProps.setTimer(prevTimer => {
                //This should stop timer once it reaches zero !!
                if(prevTimer === 0) {
                    clearInterval(time_interval)
                    alert("Times up!")
                    return 0
                }
                else {
                    return prevTimer - 1000
                }
            })
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(time_interval)
    }

    const resetTimer = () => {
        clearInterval(time_interval)
        timerProps.setTimer(300000)
    }

    const setStartTime = (start_time) => {
        timerProps.setTimer(start_time)
    }

    return {time, stopTimer, startTimer, resetTimer, setStartTime}
}

