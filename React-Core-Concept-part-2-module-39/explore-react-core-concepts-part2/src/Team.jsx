import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    // team = team + 1; // eta korle kono kaj hobe na. state hocche immutable
    const newTeam = team + 1; // state change korar somoy obossoy useState hook er bebohar korte hobe
    setTeam(newTeam); // state take jodi mutable korte chai tahole setTeam er parameter hishbe newTeam take boshiye dite hobe. ei kaj ta amra ek lineo korte partam shekhetre newTeam namok variable er kaj ek line eo kora jeto () er moddhe parameter hisebe arki.
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div>
      <h3 style={teamStyle}>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
