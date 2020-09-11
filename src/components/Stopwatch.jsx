import React, {useState} from 'react'
import styles from './styles.module.css'
import useStopwatch from '../hooks/StopwatchHook'

function Stopwatch() {

    let {time, startStopwatch, stopStopwatch, resetStopwatch} = useStopwatch()

    let [hrs, mins, secs, centisecs] = time.split(':')
    hrs = Number(hrs)
    mins = Number(mins)
    secs = Number(secs)
    centisecs = Number(centisecs)

    let [start, setStart] = useState(false)

    function handleClick(e) {
        if(e.target.name === "start" && start === false) {
            setStart(true)
            startStopwatch()
        }
        else if(e.target.name === "start" && start === true) {
            setStart(false)
            stopStopwatch()
        }
        else if(e.target.name === "reset") {
            if(start) {
                setStart(false)
            }
            resetStopwatch()
        }
        else {
            console.log(e.target)
        }
    }
    return (
        <React.Fragment>
        <div style={{flex: "1", display: "flex", alignItems: "center", padding: "0 20px"}}>
            <div style={{fontSize: "45px", padding: "8px"}}>
                {hrs > 0 ? <span>{hrs}<span style={{fontSize: "30px", marginRight: "15px"}}>h</span></span> : <span></span>}
                
                {mins === 0 ? <span></span> : <span>{mins}<span style={{fontSize: "30px", marginRight: "15px"}}>m</span></span>}
                
                {<span>{secs}<span style={{fontSize: "30px", marginRight: "15px"}}>s</span></span>}
                
                {<span style={{fontSize: "30px"}}>{centisecs > 9 ? centisecs : '0' + centisecs}</span>}
            </div>
        </div>
        <div style={{width: "100%", height: "max-content", borderTop: "1px solid rgb(220,220,220)", padding: "15px", boxSizing: "border-box"}}>
            <button name="start" onClick={handleClick} className={`${styles.button} ${styles.button1}`}>{start === true ? "PAUSE" : "START"}</button>
            <button name="reset" onClick={handleClick} className={`${styles.button} ${styles.button2}`}>RESET</button>
        </div>
    </React.Fragment>
    )
}

export default Stopwatch