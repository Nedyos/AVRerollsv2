import React, { useState } from "react";

// Calculates probability of at least one success in n trials
function probabilityOfAtLeastOne(p, n) {
  return 1 - Math.pow(1 - p, n);
}

// Calculates expected rolls for at least target probability
function rollsForProbability(p, target = 0.5) {
  return Math.ceil(Math.log(1 - target) / Math.log(1 - p));
}

export default function App() {
  const [rolls, setRolls] = useState(0);
  const [hit, setHit] = useState(false);

  const probability = 0.00005; // 0.005%
  const chance = probabilityOfAtLeastOne(probability, rolls);
  const rollsForHalf = rollsForProbability(probability, 0.5);

  function handleReroll() {
    setRolls(rolls + 1);
    // Simulate "hit"
    if (!hit && Math.random() < probability) setHit(true);
  }

  function handleReset() {
    setRolls(0);
    setHit(false);
  }

  return (
    <div style={{
      maxWidth: 420,
      margin: "40px auto",
      padding: 24,
      border: "1px solid #ddd",
      borderRadius: 10,
      fontFamily: "sans-serif",
      background: "#fafcff"
    }}>
      <h1>Reroll Counter</h1>
      <p>
        <b>Rare drop chance per roll:</b> 0.005%
      </p>
      <button
        style={{
          fontSize: 24,
          padding: "14px 40px",
          borderRadius: 8,
          cursor: "pointer",
          background: "#5adbb5",
          color: "#fff",
          border: "none",
          marginRight: 10
        }}
        onClick={handleReroll}
        disabled={hit}
      >
        {hit ? "🎉 Success!" : "Reroll"}
      </button>
      <button
        style={{
          fontSize: 18,
          padding: "8px 20px",
          borderRadius: 8,
          cursor: "pointer",
          background: "#eee",
          color: "#333",
          border: "none",
          marginLeft: 5
        }}
        onClick={handleReset}
      >
        Reset
      </button>
      <p style={{ marginTop: 16 }}>
        <b>Rolls:</b> {rolls}
      </p>
      <p>
        <b>Chance to hit at least once so far:</b> {(chance * 100).toFixed(5)}%
      </p>
      <p>
        <b>Rolls needed for 50% chance:</b> {rollsForHalf}
      </p>
      {hit && (
        <p style={{ color: "#00A36C", fontWeight: "bold" }}>
          You hit the rare drop after {rolls} rolls!
        </p>
      )}
      <p style={{ marginTop: 30, color: "#888", fontSize: 13 }}>
        Powered by React – ready for Netlify
      </p>
    </div>
  );
}