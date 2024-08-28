export default function Feedback({ state, averageValue, totalFeedback }) {
  return (
    <div>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad} </p>
      <p>Total: {totalFeedback}</p>
      <p>Posititve: {averageValue} % </p>
    </div>
  );
}
