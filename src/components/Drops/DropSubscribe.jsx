import React from "react";
import './styles.css'
const DropSubscribe = () => {
  return (
    <div className="dropSubscribe">
      <div className="content">
        <h3>Never Miss A Drop!</h3>
        <div className="newsLetterInputContainer">
          <input type="text" placeholder="ex : john.doe@mail.com" />
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default DropSubscribe;
