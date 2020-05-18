import React from "react";
import Habit from "./habit";

export default function week() {
  return (
    <div class="mt-4">
      <table class="table-auto w-full m-auto">
        <thead>
          <tr class="text-xs text-gray-700 font-medium">
            <th class="w-20"></th>
            <th class="p-2">Mon</th>
            <th class="p-2">Tue</th>
            <th class="p-2">Wed</th>
            <th class="p-2">Thu</th>
            <th class="p-2 border-t border-dotted border-gray-500 border-l border-r">
              Fri
            </th>
            <th class="p-2">Sat</th>
            <th class="p-2">Sun</th>
            <th class="p-2"></th>
          </tr>
        </thead>
        <tbody>
          <Habit
            title={"Read"}
            color={"#ecc94b"}
            isGood={true}
            pattern={[0, 1, 2, 3, 4, 5, 6]}
            marked={[2, 3]}
          />

          <Habit
            title={"WorkOut"}
            color="#ed8936"
            isGood={true}
            pattern={[0, 1, 2, 3, 4, 5, 6]}
            marked={[1, 5]}
          />

          <Habit
            title={"Alcohol"}
            color="#f56565"
            isGood={false}
            pattern={[0, 1, 2, 3, 4, 5, 6]}
            marked={[0, 1, 2, 3, 6]}
          />
        </tbody>
      </table>
    </div>
  );
}
