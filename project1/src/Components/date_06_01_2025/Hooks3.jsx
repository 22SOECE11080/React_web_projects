import { useState } from "react";

const Hooks3 = () => {
  const [color, setColor] = useState("Blue");
  const [styles, setStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const handleStyleChange = (style) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }));
  };

  return (
    <div>
      <input
        type="radio"
        name="color"
        value="Blue"
        id="color-blue"
        onChange={() => setColor("Blue")}
      />
      {"Blue"} <br />
      <input
        type="radio"
        name="color"
        value="Yellow"
        id="color-yellow"
        onChange={() => setColor("Yellow")}
      />
      {"Yellow"} <br />
      <input
        type="radio"
        name="color"
        value="Red"
        id="color-red"
        onChange={() => setColor("Red")}
      />
      {"Red"} <br />
      <input
        type="checkbox"
        name="style"
        value="bold"
        onChange={() => handleStyleChange("bold")}
      />
      {"bold"} <br />
      <input
        type="checkbox"
        name="style"
        value="italic"
        onChange={() => handleStyleChange("italic")}
      />
      {"italic"} <br />
      <input
        type="checkbox"
        name="style"
        value="underline"
        onChange={() => handleStyleChange("underline")}
      />
      {"underline"} <br />
      <p
        style={{
          color: color,
          fontWeight: styles.bold ? "bold" : "normal",
          fontStyle: styles.italic ? "italic" : "normal",
          textDecoration: styles.underline ? "underline" : "none",
        }}
      >
        This is content
      </p>
    </div>
  );
};

export default Hooks3;
