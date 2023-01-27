import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';

function App() {

  var handleClick = (e) => {
    console.log(e.target.value)
  }

  const [index, setindex] = useState(0)
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
    console.log(this.state.latitude)
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
          <Stack spacing={2} direction="row">
            {questions[index].options.map((item) => {
              return <><Button variant="contained" onClick={handleClick} value={item}>{item}</Button></>

            })}
          </Stack>
        </p>
      </header>

    </div >
  );
}

export default App;
