import React, {useState } from 'react'
import useTimer from '../hooks/TimerHook'
import styles from './styles.module.css'

function Timer() {

    const {time, stopTimer, startTimer, resetTimer, setStartTime} = useTimer() // in miliseconds

    let [hrs, mins, secs] = time.split(':')
    hrs = Number(hrs)
    mins = Number(mins)
    secs = Number(secs)

    let [selected, setSelected] = useState(false)
    let [start, setStart] = useState(false)
    let [{h, m, s}, setInputTime] = useState({h: hrs, m: mins, s: secs})

    function onChange(e) {
        let {name, value} = e.target
        setInputTime(prevState => ({...prevState, [name]: value}))
    }

    function convertTimeToMs() {
        let ms = 0
        ms += s*1000
        ms += m*60000
        ms += h*3600000
        return ms
    }

    function handleClick(e) {
        if(e.target.name === "start" && start === false) {
            setStart(true)
            if(selected) {
                setSelected(false)
                setStartTime(convertTimeToMs())
            }
            startTimer()
        }
        else if(e.target.name === "start" && start === true) {
            setStart(false)
            stopTimer()
        }
        else if(e.target.name === "reset") {
            if(start) {
                setStart(false)
            }
            if(selected) {
                setSelected(false)
            }
            setInputTime({h: 0, m: 5, s: 0})
            resetTimer()
        }
        else if(e.target.name === "input") {
            if(start) {
                setStart(false)
                stopTimer()
            }
            setSelected(true)
        }
        else {
            console.log(e.target)
        }
    }

    return (
        <React.Fragment>
            <div 
            style={{flex: "1", display: "flex", alignItems: "center", padding: "0 20px"}}>
                <div 
                onClick={() => handleClick({target:{name: 'input'}})} 
                style={{fontSize: "45px", borderBottom: selected === false ? "1px solid rgb(220,220,220)" : "2px solid #4d90fe", padding: "8px"}}>
                
                {selected === false ?
                    hrs > 0 ? <span>{hrs}</span> : <span></span> 
                    : <input 
                    value={h === 0 ? '' : h} 
                    name="h" 
                    placeholder={h === 0 || h === '' ? '0' : ''} 
                    onChange={onChange} 
                    style={{outline: "none", color: h > 0 ? "black" : "rgb(220,220,220)", textAlign: "right", height: "45px", width: "55px", fontSize: "45px", border: 'none'}}>
                    </input>}
                    
                    {(hrs > 0 || selected === true) && <span style={{marginRight: "15px", fontSize: "30px"}}>h</span>}
                    
                    {selected === false?
                    hrs > 0 && mins < 10 ? <span>0{mins}</span> : <span>{mins === 0 ? "" : mins}</span> :
                    <input 
                    value={m === 0 ? '' : m} 
                    name="m" 
                    placeholder={m === 0 || m === '' ? '0' : ''} 
                    onChange={onChange} 
                    style={{outline: "none", color: m > 0 ? "black" : "rgb(220,220,220)", textAlign: "right", height: "45px", width: "55px", fontSize: "45px", border: 'none'}}>
                    </input>}
                    
                    {(mins > 0 || selected === true) && <span style={{marginRight: "15px", fontSize: "30px"}}>m</span>}
                    
                    {selected === false ? 
                    <span>{mins > 0 && secs < 10 ? `0${secs}` : secs}</span> :
                    <input 
                    value={s === 0 ? '' : s} 
                    autoFocus={true} 
                    name="s" 
                    placeholder={s === 0 || s === '' ? '0' : ''} 
                    onChange={onChange} 
                    style={{outline: "none", color: s > 0 ? "black" : "rgb(220,220,220)", textAlign: "right", height: "45px", width: "55px", fontSize: "45px", border: 'none'}}>
                    </input>}
                    
                    <span style={{fontSize: "30px"}}>s</span>
                </div>
            </div>
            <div style={{width: "100%", height: "max-content", borderTop: "1px solid rgb(220,220,220)", padding: "15px", boxSizing: "border-box"}}>
                <button name="start" onClick={handleClick} className={`${styles.button} ${styles.button1}`}>{start === true ? "PAUSE" : "START"}</button>
                <button name="reset" onClick={handleClick} className={`${styles.button} ${styles.button2}`}>RESET</button>
            </div>
        </React.Fragment>
    )
}

export default Timer