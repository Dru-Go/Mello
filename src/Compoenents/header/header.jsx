import React, { useState } from "react";
import useInterval from "../../Hooks/useInterval";
import Humanize from "humanize-duration";

export default function Header() { 
  const [greeting, setGreetings] = useState(Greetings())
  let sleeper = new Date(Date.now());
  sleeper.setHours(21);
  sleeper.setMinutes(0);
  sleeper.setSeconds(0);
  let diff = sleeper.getTime() - Date.now();

  const [sleepTime, setSleepTime] = useState(
    diff <= 0
      ? "Time is Up"
      : Humanize(diff, { units: ["h", "m"], round: true })
  );
  useInterval(() => {
    diff = sleeper.getTime() - Date.now();
    console.log(diff);
    setSleepTime(
      diff <= 0
        ? "Time to go to sleep"
        : Humanize(diff, { units: ["h", "m"], round: true })
    );
    setGreetings(Greetings())
  }, 60000);

  return (
    <div>
      <div class="md:text-4xl sm:text-xl text-gray-700">
        {greeting} Dre
      </div>
      <div class="md:text-xs sm:text-xs text-gray-500">
        {sleepTime} till bedtime
      </div>
    </div>
  );
}

function Greetings() {
  var greeting;
  var time = new Date(Date.now()).getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return greeting
}