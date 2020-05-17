import React, { useEffect, memo,useReducer } from "react";
import moment from "moment";
import WeekReducer from "../../Reducer/weekReducer";

const styles = {
  active:
    "text-gray-700 p-2 mx-1 hover:bg-gray-200 rounded-full border border-gray-500 cursor-pointer",
  inActive: "text-gray-700 p-2 mx-1 rounded-full border border-gray-500 opacity-50",
};

const INITIALSTATE = {
  id:0,
  name: "Week",
  startDay: "00-00",
  endDay: "00-00",
};

 const DataSelector = memo(() => {
   const [state, dispatch] = useReducer(WeekReducer, INITIALSTATE);

   console.log(state);

   useEffect(() => {
     dispatch({ type: "CURRENT WEEK" });
   }, []);

   const monday_day = state.startDay.toString().split("-")[0];
   const monday_month = state.startDay.toString().split("-")[1];
   const startMonth = moment().month(monday_month).format("MMM");

   const sunday_day = state.endDay.toString().split("-")[0];
   const sunday_month = state.endDay.toString().split("-")[1];
   const endMonth = moment().month(sunday_month).format("MMM");

   return (
     <div class="flex items-center justify-between mt-6">
       <div class="flex items-center">
         <div class="flex items-center">
           <Backward state={state} dispatch={dispatch} curr={state} />
           <Forward state={state} dispatch={dispatch} curr={state} />
         </div>
         <div class="demo md:text-xl sm:text-sm ml-4 text-gray-700">
           Mon, {startMonth} {monday_day} - Sun, {endMonth} {sunday_day}
         </div>
       </div>
       <div class="cursor-pointer text-blue-400 hover:text-blue-500">
         <svg viewBox="0 0 128 128" class="fill-current w-10 h-10">
           <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z" />
         </svg>
       </div>
     </div>
   );
 });
 

export default DataSelector

const Backward = ({ state=INITIALSTATE, dispatch, curr = null }) => {

  const handleClick = () => {
    if (state.id !== 0 && curr !== null) {
      dispatch({ type: "PREV WEEK", current: curr });
    }
  };

  return (
    <div
      className={state.id !== 0 ? styles.active : styles.inActive}
      onClick={handleClick}
    >
      <svg class="w-3 h-3 fill-current rotate" viewBox="0 0 492.004 492.004">
        <g>
          <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
        </g>
      </svg>
    </div>
  );
};

const Forward = ({ state = INITIALSTATE, dispatch, curr = null }) => {

  console.log("State in the Forward Component", state);
  
  const handleClick = () => {
    if (state.lastIndex !== state.id && curr !== null) {
      dispatch({ type: "NEXT WEEK", current: curr });
    }
  };

  return (
    <div
      className={
        state.lastIndex !== state.id ? styles.active : styles.inActive
      }
      onClick={handleClick}
    >
      <svg class="w-3 h-3 fill-current" viewBox="0 0 492.004 492.004">
        <g>
          <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
        </g>
      </svg>
    </div>
  );
};
