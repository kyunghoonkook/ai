const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/nutrition", (req, res) => {
  const food = req.query.food;
  console.log(`Searching for nutrition data for ${food}`);
  // 여기에서 AI 또는 다른 API를 사용하여 영양 데이터를 확인하고 반환할 수 있습니다.
  res.json({ food: food, calories: "100 kcal", protein: "3 g" });
});

app.get("/workoutplan", (req, res) => {
  console.log(`Getting a workout plan.`);
  // 여기에서 AI를 사용하여 사용자에게 적합한 운동 계획을 찾아서 반환할 수 있습니다.
  res.json({
    plan_name: "Beginner Workout",
    workouts: ["Push-ups", "Squats", "Plank"],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
