import React from "react";

function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-tracker">
      <h3>Progress</h3>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Progress: {percentage}%</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressTracker;