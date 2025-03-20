// Handling the calendar
const currentDate = document.querySelector(".current-date");
const daysList = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const moodColors = {
  happy: "#4CAF50", // Green
  neutral: "#FFC107", // Yellow
  sad: "#9E9E9E", // Gray
  angry: "#F44336", // Red
};

// Initialize Local Storage data
let todayMood = JSON.parse(localStorage.getItem("todayMood")) || {}; // Store moods per date

const renderCalender = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";

    let storedMood = todayMood[`${currYear}-${currMonth}-${i}`]; // Check if mood is saved for this date
    let moodColor = storedMood ? moodColors[storedMood] : "transparent";

    liTag += `
      <li class="${isToday}" data-date="${currYear}-${currMonth}-${i}">
        <span class="mood-circle" style="background-color: ${moodColor};"></span>
        ${i}
      </li>
    `;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysList.innerHTML = liTag;
};

renderCalender();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date.setFullYear(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }
    renderCalender();
  });
});

// Mood area
const buttons = document.querySelectorAll("button");

let moodCounts = JSON.parse(localStorage.getItem("moodCounts")) || {
  happy: 0,
  neutral: 0,
  sad: 0,
  angry: 0,
};

let today = `${currYear}-${currMonth}-${date.getDate()}`;

// Load saved data from Local Storage
function loadFromLocalStorage() {
  Object.keys(moodCounts).forEach((mood) => {
    document.querySelector(`#${mood}-days-count`).innerText = moodCounts[mood];
  });

  if (todayMood[today]) {
    updateTodayColor(todayMood[today]);
  }
}

// Save mood selection to Local Storage
function saveToLocalStorage() {
  localStorage.setItem("todayMood", JSON.stringify(todayMood));
  localStorage.setItem("moodCounts", JSON.stringify(moodCounts));
}

//Update Local Storage when user selects a mood
function updateLocalStorage(newMood) {
  if (todayMood[today] === newMood) return; // Prevent duplicate selection

  if (todayMood[today]) {
    moodCounts[todayMood[today]]--;
    document.querySelector(`#${todayMood[today]}-days-count`).innerText =
      moodCounts[todayMood[today]];
  }

  moodCounts[newMood]++;
  document.querySelector(`#${newMood}-days-count`).innerText =
    moodCounts[newMood];

  todayMood[today] = newMood;
  saveToLocalStorage();
  updateTodayColor(newMood);
  renderCalender(); // Refresh the calendar with updated mood color
}

// Handle button clicks
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let newMood = "";

    if (e.target.id === "happy-button") newMood = "happy";
    else if (e.target.id === "neutral-button") newMood = "neutral";
    else if (e.target.id === "sad-button") newMood = "sad";
    else if (e.target.id === "angry-button") newMood = "angry";

    if (newMood) {
      updateLocalStorage(newMood);
    }
  });
});

// Function to update today's date color
function updateTodayColor(mood) {
  const todayElement = document.querySelector(".days .active");
  if (todayElement) {
    todayElement.style.color = "#fff";
    todayElement.style.position = "relative";
    todayElement.style.zIndex = "1";
    todayElement.style.backgroundColor = moodColors[mood];
  }
}

// Load stored data when the page loads
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
