import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello world - Reacts + {count}{" "}
      <button onClick={() => setCount((c) => c + 1)}>+ count</button>
      <div>Try changing src/App.tsx</div>
    </div>
  );
};

export default App;
