import React from "react";

const styles = {
  box: "w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300",
  circle: "w-3 h-3 rounded-full bg-yellow-500",
  firstRow: "flex items-center justify-start cursor-pointer",
  lastRow: "p-2 flex items-center",
  progress_1: "w-2/4 bg-gray-200 rounded-full h-1 relative",
  progress_2: "w-2/7 bg-yellow-500 absolute top-0 left-0 rounded h-full",
  grades: "text-xs mx-2",
  grayColor: "#e2e8f0",
};

export default function habit({ title, color, isGood, pattern, marked }) {
  return (
    <tr class="text-center text-xs text-gray-500">
      <td class="p-2 font-medium">
        <div className={styles.firstRow}>
          {isGood && (
            <div
              className={styles.circle}
              style={{ backgroundColor: color }}
            ></div>
          )}
          {!isGood && <BadHabit color={color} />}
          <div class="mx-2">{title}</div>
        </div>
      </td>

     {pattern.map((index)=>(
         <Rows index={index} marked={marked} color={color} pattern={pattern} />
     ))}

      <td className={styles.lastRow}>
        <div className={styles.progress_1}>
          <div
            className={styles.progress_2}
            style={{
              backgroundColor: color,
              width: (marked.length / 7) * 100 + "%",
            }}
          ></div>
        </div>
        <div className={styles.grades}>{marked.length}/7</div>
      </td>
    </tr>
  );
}

const Rows = ({pattern, marked, color, index}) => {
    return (
      <td class="p-2">
        {pattern.includes(index) && (
          <div
            className={styles.box}
            style={{
              backgroundColor: marked.includes(index) ? color : styles.grayColor,
            }}
          ></div>
        )}
      </td>
    );
}

const BadHabit = ({ color }) => (
  <div>
    <svg class="w-3 h-3" viewBox="0 0 511.992 511.992">
      <path
        d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"
        fill={color}
      />
    </svg>
  </div>
);
