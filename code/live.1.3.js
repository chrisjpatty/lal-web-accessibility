import React, { useState } from "react";

function Form(){
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("I don't think that's really your name.");
  };

  return (
    <div className="wrapper">
      <div className="field">
        <label>First name</label>
        <input type="text" />
      </div>
      <p aria-live='polite'>
        {error}
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
