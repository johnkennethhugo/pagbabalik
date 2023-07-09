import { useEffect, useState } from 'react';
import './App.css';
import bossing from './image/000.png';


function App(app) {
  const [hour, setHour] = useState(0)
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)

  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      updateHandler()
    }, 500)
    return () => clearInterval(interval)
  });

  const target = {
    total: 2116800,
    month: 7,
    day: 24,
    hour: 12,
    mins: 59,
    secs: 59
  }

  const updateHandler = () => {
    const date = new Date();
    const totalSecs = toSeconds(date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
    setMonth(doubleDigitHandler(target.month - (date.getMonth() + 1)))
    toDHMS(target.total - totalSecs)
  }

  const toSeconds = (days, hours, minutes, seconds) => {
    return (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
  }

  const toDHMS = (seconds) => {
    setDay(doubleDigitHandler(Math.floor(seconds / (24 * 60 * 60))))
    seconds %= 24 * 60 * 60;
    setHour(doubleDigitHandler(Math.floor(seconds / (60 * 60))))
    seconds %= 60 * 60;
    setMins(doubleDigitHandler(Math.floor(seconds / 60)))
    seconds %= 60;
    setSecs(doubleDigitHandler(seconds))
  }

  const doubleDigitHandler = (value) => {
    if ((value % 10 !== 0 && value < 10) || value === 0) {
      return '0' + value
    } else {
      return value
    }
  }

  return (
    <div className="App">
      <div className="timer-container">
        <div className='timer-head'>
          <span>Months</span>
          <span> : </span>
          <span>Days</span>
          <span> : </span>
          <span>Hours</span>
          <span> : </span>
          <span>Minutes</span>
          <span> : </span>
          <span>Seconds</span>
        </div>
        <table className='timer-container-table'>
          <tbody>
            <tr>
              <td>{month}</td>
              <td>:</td>
              <td>{day}</td>
              <td>:</td>
              <td>{hour}</td>
              <td>:</td>
              <td>{mins}</td>
              <td>:</td>
              <td>{secs}</td>
            </tr>
          </tbody>
        </table>
        <div className='timer-container-image'>
          <img src={bossing} alt='bossing' />
        </div>
      </div>
    </div>
  );
}

export default App;
