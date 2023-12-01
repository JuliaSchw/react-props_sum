import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <div>
      <h1>Sum</h1>
      <p>
        the sum of <strong>{valueA}</strong> and <strong> {valueB}</strong> is{" "}
        <strong className="sum">{valueA + valueB}</strong>
      </p>
    </div>
  );
}

export default function App() {
  return <Sum valueA={3} valueB={1} />;
}
