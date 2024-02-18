const time = () => {
  const timeElement = document.querySelector(".time");
  var currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  var formattedNumber = ("0" + minutes).slice(-2);
  timeElement.innerHTML = hours + ":" + formattedNumber;
};
time();
window.setInterval(function () {
  time();
}, 1000);

let muscle = "";
let muscleGroupData = [];
const muscleGroups = document.getElementById("muscle-groups");
const createExercise = document.querySelector("#exercises-list");
const exerciseData = document.getElementById("exercise-data");
const displayExercises = (exercises) => {
  const exerciseList = document.getElementById("exercises-list");
  exerciseList.classList.remove("hidden");
  for (i = 0; i < exercises.length; i++) {
    const exerciseName = document.createElement("p");
    const exerciseNametxt = document.createTextNode(exercises[i].name);
    exerciseName.appendChild(exerciseNametxt);
    exerciseName.classList.add("exercise");
    exerciseList.appendChild(exerciseName);
  }
};

const createExerciseData = (exercises) => {
  createExercise.classList.add("hidden");
  exerciseData.classList.remove("hidden");

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
    headers: { "X-Api-Key": "k6AqBd9EJ+ukEjEjs7HUYA==WLlHBu9nm8Ceioe5" },
    contentType: "application/json",
    success: function (result) {
      muscleGroupData = result;
      const exerciseNameText = exercises.innerHTML;
      for (i = 0; i < muscleGroupData.length; i++) {
        if (muscleGroupData[i].name == exerciseNameText) {
          const exerciseNamePage = document.createElement("h2");
          const exerciseNameTextPage = document.createTextNode(
            muscleGroupData[i].name
          );
          const exerciseEquipmentPage = document.createElement("p");
          const exerciseEquipmentTextPage = document.createTextNode(
            "Equipment needed: " + muscleGroupData[i].equipment
          );
          const exerciseInstructionsTitle = document.createElement("p");
          const exerciseInstructionsTitleText =
            document.createTextNode("Instructions:");
          const exerciseInstructions = document.createElement("p");
          const exerciseInstructionsText = document.createTextNode(
            muscleGroupData[i].instructions
          );
          exerciseInstructions.appendChild(exerciseInstructionsText);
          exerciseInstructions.classList.add("instructions");
          exerciseInstructionsTitle.appendChild(exerciseInstructionsTitleText);
          exerciseInstructionsTitle.classList.add("instructions-title");
          exerciseEquipmentPage.appendChild(exerciseEquipmentTextPage);
          exerciseNamePage.appendChild(exerciseNameTextPage);
          exerciseData.appendChild(exerciseNamePage);
          exerciseData.appendChild(exerciseEquipmentPage);
          exerciseData.appendChild(exerciseInstructionsTitle);
          exerciseData.appendChild(exerciseInstructions);
        }
      }
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
};

let muscleGroup = () =>
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
    headers: { "X-Api-Key": "k6AqBd9EJ+ukEjEjs7HUYA==WLlHBu9nm8Ceioe5" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      muscleGroupData = result;
      displayExercises(muscleGroupData);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });

const changeSection = async (exercises) => {
  createExercise.innerHTML = "";
  muscleGroups.classList.add("hidden");
  muscle = exercises;
  displayExercises(muscleGroup());
};

createExercise.addEventListener("click", (e) => {
  const exercise = e.target.closest(".exercise");
  if (!exercise) return;
  createExerciseData(exercise);
});

let returnHome = () => {
  createExercise.classList.add("hidden");
  createExercise.innerHTML = "";
  exerciseData.classList.add("hidden");
  exerciseData.innerHTML = "";
  muscleGroups.classList.remove("hidden");
};
