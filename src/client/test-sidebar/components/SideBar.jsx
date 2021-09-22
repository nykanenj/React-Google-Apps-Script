import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import server from '../../utils/server';

const { serverFunctions } = server;

const SideBar = () => {
    console.log(`serverFunctions: ${JSON.stringify(serverFunctions)}`)
    console.log(`serverFunctions.getActiveRangeA1: ${serverFunctions.getActiveRangeA1}`)

    const [activeRange, setActiveRange] = useState();
    const getActiveRangeA1 = () => {
        serverFunctions
          .getActiveRangeA1()
          .then(setActiveRange)
          .catch(alert);
      };

    return (
    <div>
    <button id="test" onClick={getActiveRangeA1}>Click Me1 </button>
    <button id="test" onClick={()=>getActiveRangeA1()}>Click Me2 </button>
    <Button onClick={getActiveRangeA1}>Click Me 3</Button>
    <Button onClick={() => getActiveRangeA1()}>Click Me 4</Button>
    <p>Current active range is: {activeRange}</p>
  </div>)
}

export default SideBar;
