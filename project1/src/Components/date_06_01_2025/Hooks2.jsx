import { useState } from "react";

const Hooks2 = () => {
  const [name, setname] = useState("PRJ");
  return (
    <div>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        onChange={(e) => setname(e.target.value)}
      />
      
      <h1>{name}</h1>
    </div>
  );
};

export default Hooks2;
