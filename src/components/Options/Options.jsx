import { useState } from "react";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  const isAble = totalFeedback !== 0;

  return (
    <div>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>

      {isAble && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
