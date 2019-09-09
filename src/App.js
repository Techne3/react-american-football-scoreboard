//TODO: STEP 1 - Import the useState hook.
import React, {useState,useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [count, setCount] =useState( 400);
  const [form, setForm] = useState({
    Team: "Name",
    Points: 0,
  });

  function passChange(key, value) {
    setForm(pass => {
      return { ...pass, [key]: value };
    });
  }

   //Count Timer
  setTimeout((e) => {
    setCount(count -1)
    if(count ==0){
      setCount("time")
    }
  },1000)
 
  // if (count ===0)
  // setCount('0:00')

  
 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{count}</div>
          <div className="away">
            <h2 className="away__name">{form.team}</h2>
            <div className="away__score">{form.points}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={() => setHome(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick ={() => setHome(home + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick= {()=> setAway(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick ={() => setAway(away +3)}>Away Field Goal</button>
        </div>
        <div className = "reset">
          <button className= "awayButtons__touchdown"onClick = {( ) =>setHome(0)}>Reset Home</button>
          <button className= "awayButtons__touchdown"onClick = {( ) =>setAway(0)}>Reset Away </button>
        </div>
        <div className="Teams">
          <h1>Team</h1>
          <input
          id='Team'
          placeholder='team'
          onChange={e => passChange('team', e.target.value)}
        />
        </div>
        <div className="Points">
          <h1>Points</h1>
          <input
          id='Points'
          onChange={e => passChange('points', e.target.value)}
        />
        </div>
      </section>
    </div>
  );
}

export default App;
