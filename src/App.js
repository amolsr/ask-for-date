import './App.css';
import { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import heart from './heart.svg'
import handleSubmit from './action/handleSubmit';
function App() {

  var handleClick = (e) => {
    if (e.target.value === "No") {
      setIsNo(!isNo)
      setNoCount(noCount + 1)

    } else {
      setIsYes(true)
    }
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    // ISTTime now represents the time in IST coordinates
    var hoursIST = ISTTime.getHours()
    var minutesIST = ISTTime.getMinutes()

    handleSubmit(e.target.value + " " + noCount + " " + hoursIST + ":" + minutesIST)
  }

  const [index,] = useState(0)
  const [isNo, setIsNo] = useState(false)
  const [isYes, setIsYes] = useState(false)
  const [noCount, setNoCount] = useState(0)
  var questions = [{
    question: "Do you want to go on a date with me?",
    options: ["Yes", "No"]
  }, {
    question: "Should I bring ?",
    options: ["Roses", "Chocolates"]
  }]

  var position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => { console.log(position.coords.latitude + " " + position.coords.longitude) },
      err => console.log(err)
    );
  }
  useEffect(() => {
    position()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="App-logo" alt="logo" />
        <p style={{ marginTop: "-4rem", color: "white", zIndex: 1 }}>
          {isYes ? "Thank you." : questions[index].question}
        </p>
        <p>
          <Grid container spacing={2} className={isYes ? 'hide' : null}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClick} value={questions[index].options[0]} >{questions[index].options[0]}</Button>
            </Grid>
            <Grid item xs={6} className={isNo ? 'hide' : null}>
              <Button variant="contained" onClick={handleClick} value={questions[index].options[1]} >{questions[index].options[1]}</Button>
            </Grid>
          </Grid>
        </p>
      </header>

    </div >
  );
}

export default App;
