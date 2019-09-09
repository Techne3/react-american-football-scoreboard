import React , {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(4)

  if(down === 0){
    setDown(4)
  }

  //form
  const[forms,setForms]=useState({
    togo:0,
    ballOn:0,
  })

  function newChange(key, value) {
    setForms(change => {
      return { ...change, [key]: value };
    });
  }


  return (

  
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="homeButtons__touchdown"onClick = {()=> setDown(down - 1)}>Down</button>
       
      </div>

      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{forms.togo}</div>

        <div className="Points">
          <h1>To Go</h1>
          <input
          id='togo'
          onChange={e => newChange('togo', e.target.value)}
        />
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{forms.ballOn}</div>

        <div className="Points">
          <h1>Ball On</h1>
          <input
          id='ballOn'
          onChange={e => newChange('ballOn', e.target.value)}
        />
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
   
 
    </div>
   
     
  );
};

export default BottomRow;
