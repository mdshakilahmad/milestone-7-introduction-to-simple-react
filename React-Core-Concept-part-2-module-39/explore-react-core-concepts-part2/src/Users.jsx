import { useEffect, useState } from "react";

export default function Users() {
  // eikhane state er name dilam users ebong eitake jodi data ta peye jai set korte chai tahole setUsers name dilam orthat porer tate same name e dibo prothom word boro haterhobe tobe tar age set bolbo setUsers
  const [users, setUsers] = useState([]); // ekhane jeheto kono user ke paoa jodi na jai tar mane default man hobe empty ekta array []
  // default man jodi kono shongkha hoi tahole default man hobe 0 othoba 1 hoite pare
  // ar jodi default man hoi boolean type hoi tahole true othoba false hoite pare
  // eki vabe jodi vitore array pabo shomvobona thake tahole dedafult man hobe emty array []

  // useEffect korle import korte hoi ar ekhane auto import hoyeo jabe na hole kore nite hobe
  // useEffect she parameter nei duita ekta holo (1)call back function , arekta holo (2)dependency
  // to amra jodi prothombar shdho matro data load korte chai tahole dependency dibo hocche empty array []
  useEffect(() => {
    // to ekhane async await o use korte pari abar onno jeguli sikhcilam sevabeo dekhte pari
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // .then((data) => console.log(data)); // data ta amader ekhane rekhe dile hobe na tar mane setUsers take ekhane call kore dibo orthat data ta jokhon pabe tokho console na kore setUser er moddhe set kore dichi
      .then((data) => setUsers(data)); // data ta amader ekhane rekhe dile hobe na tar mane setUsers take ekhane call kore dibo orthat data ta jokhon pabe tokho console na kore setUser er moddhe set kore dichi
  }, []);
  return (
    <div>
      {/* // to ekhon jodi dekhte chai je data ta users e gelo kina shetar jonnno dynamic vabe korbo {users.length} taholei dekhte parbo */}
      <h2>users: {users.length}</h2>
    </div>
  );
}

/* 
1. declare a state to hold the data
2. useEffect with call back and dependency array 
3. use fetch to load data

*/
