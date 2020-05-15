import React from 'react';
import './App.css';
import Header from './compoenents/header/header'
import DateSelector from './compoenents/selector/dateSelector'
import TimeTable from './compoenents/time table/week'
import TimeLine from './compoenents/progress/timeline'
import './tailwind^2.css';

function App() {
  return (
    <div class="md:mx-64 sm:mx-0 mt-20 sm:w-full md:w-auto">
      <Header/>
      <TimeLine/>
      <DateSelector/>
      <TimeTable/>
      <div></div>
    </div>
  );
}

export default App;
