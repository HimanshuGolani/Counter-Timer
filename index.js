const Heading = document.querySelector("h1");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");

// Calculation for Time
const Second = 1000;
const Min = 60 * Second;
const Hour = 60 * Min;
const day = 24 * Hour;

const timerFunction = () => {
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0");
  let mm = String(now.getMonth()).padStart(2, "0");
  let yyyy = now.getFullYear();

  const enterDay = prompt("enter day").padStart(2, "0");
  const entermonth = prompt("enter month").padStart(2, "0");
  now = `${mm}/${dd}/${yyyy}`;

  let targetDate = `${entermonth}/${enterDay}/${yyyy}`;

  if (now > targetDate) {
    targetDate = `${entermonth}/${enterDay}/${yyyy + 1}`;
  }

  const intervalId = setInterval(() => {
    const To = new Date(targetDate).getTime();
    const from = new Date().getTime();

    const difference = To - from;

    const DaysLeft = Math.floor(difference / day);
    const HoursLeft = Math.floor((difference % day) / Hour);
    const minutesLeft = Math.floor((difference % Hour) / Min);
    const secondsLeft = Math.floor((difference % Min) / Second);

    daysElement.innerText = DaysLeft;
    hoursElement.innerText = HoursLeft;
    minutesElement.innerText = minutesLeft;
    secondsElement.innerText = secondsLeft;

    if (difference < 0) {
      counterTimer.computedStyleMap.display = "none";
      Heading.innerText = "Time's up";
      clearInterval(intervalId);
    }
  }, 1000);
};

timerFunction();
