import React, {useState} from 'react'

export const TimeContext = React.createContext()

function TimeContextProvider(props) {
    const [timer, setTimer] = useState(300000) //in miliseconds

    const [stopwatch, setStopwatch] = useState(0) //in miliseconds

    return (
        // <TimeContext.Provider value={{timer, stopwatch, startTimer, stopTimer, resetTimer, setTimer}}>
        <TimeContext.Provider value={{timer, setTimer, stopwatch, setStopwatch}}>
            {props.children}
        </TimeContext.Provider>
    )
}   

export default TimeContextProvider

