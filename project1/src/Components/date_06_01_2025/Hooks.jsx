import { useState } from "react";

const Hooks = () => {
  //   const [name] = useState("RJ");
  const [num, setnum] = useState(1);
  return (
    <div>
      <h1>Number: {num}</h1>
      <button onClick={() => setnum(num + 1)}>Increase Number</button>
      <button onClick={() => setnum(num <= 0 ? 0 : num - 1)}>
        Decrease Number
      </button>
    </div>
  );
};

export default Hooks;

// import { useState } from "react";

// const Hooks = () => {
//   const [num, setNum] = useState(1);

//   const handleNumberChange = (operation) => {
//     if (operation === "increase") {
//       setNum(num + 1);
//     } else if (operation === "decrease") {
//       setNum(num <= 0 ? 0 : num - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Number: {num}</h1>
//       <button onClick={() => handleNumberChange("increase")}>
//         Increase Number
//       </button>
//       <button onClick={() => handleNumberChange("decrease")}>
//         Decrease Number
//       </button>
//     </div>
//   );
// };

// export default Hooks;
