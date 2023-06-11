class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCalorieLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesRemaining();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
  }

  // PUBLIC METHODS //
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;

    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;

    this._render();
  }

  // PRIVATE METHODS //
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');

    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCalorieLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');

    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById('calories-remaining');

    caloriesRemainingEl.innerHTML = this._calorieLimit - this._totalCalories;
  }

  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById('calories-consumed');

    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');

    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );
    caloriesBurnedEl.innerHTML = burned;
  }

  _render() {
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesTotal();
    this._displayCaloriesRemaining();
  }
}

class Meal {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
    this.id = Math.random().toString(16).slice(2);
  }
}
class Workout {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
    this.id = Math.random().toString(16).slice(2);
  }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('breakfast', 450);
const lunch = new Meal('lunch', 150);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout('Morning run', 350);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
