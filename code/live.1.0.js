import React, { useState } from "react";

const App = () => {
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
