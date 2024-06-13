import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actor = ["Sakib", "Raj", "Shariful Raj", "Jasim", "Rubel"];

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 100 },
  ];

  const singers = [
    { id: 1, name: "Dr. Mahfuzur", age: 68 },
    { id: 2, name: "Eva Rhman", age: 38 },
    { id: 3, name: "Shuvro Dev", age: 58 },
    { id: 4, name: "Pritom", age: 28 },
  ];

  return (
    <>
      <h3>Vite + React</h3>

      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa Raz"}></Actor>
      {actor.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>

      {/* amra jodi chai je onek guli same component niyechi ekhon kicho component er style e aro kicho add korte chacchi alada kore tokhon amra 
      jeitate change korte chai sheita jekhane call korchi sheitar name er pashei property er moton kore likhe dibo jemon ekhane ache name="Laptop" ebnog 
      price="55" evabe likhbo ar etar access ta nibo oi function jekhan theke ashteche component er shekhane parametar er props diye access nibo
    */}
      {/* ekhane name ebong price ekta propertay er motnon kaj korbe 
      ebong ei jinish guli jabe props er moddhe object hishebe
      */}

      {/* Device er starting abong ending ei duita thakte hobe ebong first word boro hater hote hobe */}
      {/* eije student er etar moddhe grade ebong score ei duita props diye etar access neoa jabe object hoye ashbe okhane */}
      {/* 
      <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
       */}
    </>
  );
}

function Device(props) {
  // ekhane props er moddhe Device er moddhe je property guli ache orthat name ebong price ei duita kinto props er moddhei pabo object er moton kore
  // console.log(props);
  return (
    <h2>
      {/* jehoto props parent orthat object tai props.name ekhbe property er access nite hobe */}
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name} person with: {age + money}
    </h3>
  );
}

// const { grade, score } = { grade: "7", score: "7" }; // distracturing eta evabeo niyeo kora jabe
/*
এখানে আরেকটা কথা হচ্ছে আমরা যদি  কয়েকটা component যদি থাকে তো সেগুলার মধ্যে সবগুলোতে আমরা props নিলাম না তো এখন যদি destructuring এর বেলায় ডিফল্ট কোন মান সেট করে না দেই তাহলে এই component এর মধ্যে কোন props নেওয়া হয়েছিল না সেইটার আউটপুট আমরা আনলিফাইন undefined পাব | আর যদি ডিফল্ট মান সেট করে দেই তাহলে সেই ডিফল্ট মানটা পেয়ে যাবে | 
 */
function Student({ grade = 1, score = 0 }) {
  // distracturing korteche
  // console.log(props);
  console.log(grade, score);
  return (
    <div className="student">
      <h3>this is a student</h3>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div
      /* amara css er moton style likhte pari tobe ekhane style likhe {} er moddhe abar arekta {{}} dite hobe
         orthat evabe style {{}} vioter tar moddhe css property bojhate object er moddhe property boshate hobe */
      // ekhane style er moddhe developerStyle dileo vlaue guli peye jeto
      // style={developerStyle} // evabe dileo hoto

      // abar {} er moddhe shora shori dileo hobe
      // orthat duita {{er moddhe dite hobe}}
      // ekta {} style er jonne arekta {} object likhar jonne
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "20px",
      }}
    >
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  );
}

export default App;
