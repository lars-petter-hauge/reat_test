import { useState } from 'react';
import "./App.css";

function App() {
  const env_value = process.env.ENV_VALUE;
  const [state, setState] = useState("")
  fetch("/api")
    .then(response => response.json())
    .then(data => setState(data))
    .catch(error => console.error(error));
  return (
    <div>
      <h1>Environment value: {env_value}. Backend value: {state}</h1>
    </div>
  );
}

export default App;
