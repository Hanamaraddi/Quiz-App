import React from "react";

const Display = ({ quetion, index, changeHandler }) => {
  const handler = (e) => {
    const temp = quetion.answer === e.target.value ? 1 : 0;
    changeHandler(temp, index);
  };

  return (
    <div className="quetion-headers">
      <h3>{quetion.title}</h3>
      <div onChange={handler}>
        <input type="radio" value="A" name={index} /> {quetion.options[0]}{" "}
        <br />
        <input type="radio" value="B" name={index} /> {quetion.options[1]}{" "}
        <br />
        <input type="radio" value="C" name={index} /> {quetion.options[2]}{" "}
        <br />
        <input type="radio" value="D" name={index} /> {quetion.options[3]}{" "}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Display;
