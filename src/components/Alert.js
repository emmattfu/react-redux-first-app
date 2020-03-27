import React from "react";

function Alert({text}) {
  return (
    <div className="alert alert-danger" role="alert">
      <p className="text-center">{text}</p>
    </div>
  );
}

export default Alert;
