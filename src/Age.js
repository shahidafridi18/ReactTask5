import React, { useState } from "react";

function Calculateage() {
  const [Currage, setCurrage] = useState(0);
  const [currdob, setCurrdob] = useState(0);

  const calculateage = () => {
    const birthdate = new Date(currdob);
    const currentdate = new Date();
    const aims = currentdate - birthdate;
    if (aims < 0) {
      alert("Select a correct date!");
      return;
    }

    const aiy = aims / (365 * 24 * 60 * 60 * 1000);
    if (isNaN(aiy)) {
      alert("Select a date!");
    } else {
      setCurrage(Math.floor(aiy));
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-center">Age Calculator</h1>
      <h6 className="text-center">Enter your date of birth</h6>
      <div className="d-flex flex-column align-items-center">
        <input
          className="block m-auto w-60 my-4"
          type="date"
          value={currdob}
          onChange={(d) => setCurrdob(d.target.value)}
        />
        <button
          className="btn btn-primary text-light text-center"
          onClick={calculateage}
        >
          Calculate Age
        </button><br></br>
        {Currage && <h5>Your age is {Currage} years.</h5>}
      </div>
    </div>
  );
}

export default Calculateage;
