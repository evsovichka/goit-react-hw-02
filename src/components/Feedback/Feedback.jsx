export default function Feedback({ state }) {
  return (
    <div>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad} </p>
    </div>
  );
}
