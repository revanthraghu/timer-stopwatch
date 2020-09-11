import React from 'react';
import Timer from './components/Timer.jsx'
import Stopwatch from './components/Stopwatch'
import styles from './App.module.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      timer: true,
      stopwatch: false,
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(e) {
    let target = e.target.name || e.target.parentElement.name
    if(target === "timer") {
      this.setState({timer: true, stopwatch: false})
    }
    else if(target === "stopwatch") {
      this.setState({timer: false, stopwatch: true})
    }
  }

  render() {
    return (
      <div className={styles.main}>
        <div style={{width: "inherit", height: "60px", borderBottom: "1px solid rgb(220,220,220)"}}>
          <ul style={{listStyle: "none", height: "inherit", fontSize: "14px", fontFamily: "arial, sans-serif", display: "flex", width: "100%", padding: "0", border: "0", margin: "0"}}>
            <li style={{height: "100%", width: "50%", textAlign: "center"}}>
              <button name="timer" onClick={this.handleOptionChange} style={{outline: "none", padding: "0", width: "100%", height: "100%", border: "none", background: "transparent", position: "relative", color: this.state.timer === true ? "#4285f4" : "rgb(46,52,54)"}}>
                <div style={{position: "absolute", height: "2px", bottom: "0", right: "0", backgroundColor: "#4285f4", width: this.state.timer === true ? "100%" : "0", transition: "width 0.2s ease-out"}}></div>
                <i style={{marginRight: "6px"}} className="fal fa-hourglass"></i>
                TIMER
              </button>
            </li>
            <li style={{height: "100%", width: "50%", textAlign: "center"}}>
              <button name="stopwatch" onClick={this.handleOptionChange} style={{outline: "none", padding: "0", width: "100%", height: "100%", border: "none", background: "transparent", position: "relative", color: this.state.stopwatch === true ? "#4285f4" : "rgb(46,52,54)"}}>
                <div style={{position: "absolute", height: "2px", bottom: "0", backgroundColor: "#4285f4", width: this.state.stopwatch === true ? "100%" : "0", transition: "width 0.2s ease-out"}}></div>
                <i style={{marginRight: "6px"}} className="fal fa-stopwatch"></i>
                STOPWATCH
              </button>
            </li>
          </ul>
        </div>
        
        <div style={{flex: "1", fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          {this.state.timer === true ? <Timer /> : <Stopwatch />} 
        </div>
        

      </div>
    );
  }
}

export default App;
