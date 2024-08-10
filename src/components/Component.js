import React, { useState, useEffect} from 'react';

function Component() {
    console.log("suca");
    const [count, setCount] = useState(() => {
      console.log("Calculating initial state...");
      return 10; // Initial state is 10
    });
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  export default Component