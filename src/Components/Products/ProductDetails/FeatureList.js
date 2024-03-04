// FeatureList.js
import React from "react";

function FeatureList({ features }) {
  return (
    <ul style={{ paddingInlineStart: "20px" }}>
      {features.map((feature, index) => (
        <li key={index} style={{ padding: "5px 0" }}>{feature}</li>
      ))}
    </ul>
  );
}

export default FeatureList;
