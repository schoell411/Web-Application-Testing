import React, { useState } from 'react';
import Display from "./Display";
import Buttons from "./Buttons";

const Dashboard = () => {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hits, setHits] = useState(0);

  return (
    <div>
      <Display
        balls={balls}
        strikes={strikes}
        hits={hits}
      />
      <Buttons 
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
    </div>
  )

}

export default Dashboard;