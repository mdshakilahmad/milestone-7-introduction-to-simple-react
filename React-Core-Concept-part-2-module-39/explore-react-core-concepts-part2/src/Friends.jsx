import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]); // jeheto friends guli array to ekhane default man empty array dite hobe []

  //   ekhon data load korar jonno amra ki korbo useEffect marbo tahole data load kora jabe
  //   useEffect dile auto import hoye jabe
  // prothomei ekta coma diye [] diye nibo orthat dependency dilam jate vule na jai
  // ebong useEffect e ekta anonimas call back function dibo ar etar vitore amra async await ba fetch o use korte pari
  // fetch er moddhe api take call kore dilam
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      //   .then(data => console.log(data))
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h2>friends: {friends.length}</h2>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}

/* 
1. state to hold data
2. useEffect with dependency array
3. use fetch to load data
4. set loaded data to the state 
5. display data on the component
*/
