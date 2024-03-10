// Specifications.js
import React from "react";

function Specifications({ specifications }) {
  return (
    <div className="specifications">
      <h4 style={{ borderBottom: "4px solid var(--primary-color)", paddingBottom: "5px" }}>Specifications:</h4>
      <table style={{ borderSpacing: "0 10px" , width: "100%"}}>
        <tbody>
          {Object.entries(specifications).map(([key, value], index) => (
            <tr key={key} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "" }}>
              <td style={{ padding: "10px" }}> <strong>{key}</strong></td>
              <td style={{ padding: "10px" }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Specifications;
