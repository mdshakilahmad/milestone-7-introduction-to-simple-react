import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>

      {/*
      <button
        onClick={function () {
          alert("third clicked");
        }}
      >
        third
      </button> 
      */}

      {/* <button onClick={addToFive(3)}>Four</button> */}
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
