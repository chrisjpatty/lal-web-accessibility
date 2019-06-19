import React, { useState } from "react";

function Form(){
  return (
    <div className="wrapper">
      <div className="field">
        <label>First name</label>
        <input type="text" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
