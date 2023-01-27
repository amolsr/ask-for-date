import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';

function App() {

  var handleClick = (e) => {
    console.log(e.target.value + " " + noCount)
    if (e.target.value === "No") {
      setIsNo(!isNo)
      setNoCount(noCount + 1)
      console.log(e.target.className)
    } else {

    }
  }

  const [index,] = useState(0)
  const [isNo, setIsNo] = useState(false)
  const [noCount, setNoCount] = useState(0)
  var questions = [{
    question: "Are you up for a date with me .?",
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
        <FavoriteIcon className="App-logo" alt="logo" />
        <p style={{ marginTop: "-4rem" }}>
          {questions[index].question}
        </p>
        <p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClick} value={questions[index].options[0]} >{questions[index].options[0]}</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClick} value={questions[index].options[1]} className={isNo ? 'buttonLeft' : null}>{questions[index].options[1]}</Button>
            </Grid>
          </Grid>
        </p>
      </header>

    </div >
  );
}

export default App;
