import React from "react";

export default function Greeting({ name, surname }) {
  return (
    <div>
      <p>
        Hello {name} {surname}!
      </p>
    </div>
  );
}
