import React, { useState } from "react";

function Form(){
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("I don't think that's really your name.");
  };

  return (
    <div className="wrapper">
      <div className="field">
        <label htmlFor='firstName'>First name</label>
        <input
          type="text"
          id='firstName'
          aria-invalid={!!error}
          aria-describedby='firstNameError'
        />
      </div>
      <p
        id='firstNameError'
        aria-live='polite'
      >
        {error}
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
