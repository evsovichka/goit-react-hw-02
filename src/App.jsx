import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [value, setValue] = useState(() => {
    const savedfeedback = window.localStorage.getItem("feedback");

    return savedfeedback
      ? JSON.parse(savedfeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(value));
  }, [value]);

  const resetFeedback = () => setValue({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = value.good + value.bad + value.neutral;

  const positiveFeedbackPercentage = Math.round(
    ((value.good + value.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          state={value}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
