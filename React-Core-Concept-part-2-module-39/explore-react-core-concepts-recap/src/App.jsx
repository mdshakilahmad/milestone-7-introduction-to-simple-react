import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Posts";

function App() {
  return (
    <>
      <h1>React Core Concepts Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  );
}

export default App;
