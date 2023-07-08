import React, { useState } from "react";
import "./App.css";

function App() {
  const [food, setFood] = useState("");

  const getNutritionData = async () => {
    // Backend API 호출
    const response = await fetch(
      `http://localhost:5000/nutrition?food=${food}`
    );
    const data = await response.json();
    console.log(data);
  };

  const getWorkoutPlan = async () => {
    // Backend API 호출
    const response = await fetch(`http://localhost:5000/workoutplan`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>AI Health Coach</h1>
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <button onClick={getNutritionData}>Get Nutrition Data</button>
      <button onClick={getWorkoutPlan}>Get Workout Plan</button>
    </div>
  );
}

export default App;
