import React from "react";

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
          <tr class="text-center text-xs text-gray-500">
            <td class="p-2 font-medium">
              <div class="flex items-center justify-start cursor-pointer">
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="mx-2">Read</div>
              </div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-yellow-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-yellow-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-yellow-400 bg-gray-300"></div>
            </td>

            <td class="p-2 flex items-center">
              <div class="w-2/4 bg-gray-200 rounded-full h-1 relative">
                <div class="w-2/7 bg-yellow-500 absolute top-0 left-0 rounded h-full"></div>
              </div>
              <div class="text-xs mx-2">2/7</div>
            </td>
          </tr>
          <tr class="text-center text-xs text-gray-500">
            <td class="p-2 font-medium">
              <div class="flex items-center justify-start cursor-pointer">
                <div class="">
                  <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <div class="mx-2">WorkOut</div>
              </div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-orange-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-orange-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-orange-400 bg-gray-300"></div>
            </td>

            <td class="p-2 flex items-center">
              <div class="w-2/4 bg-gray-200 rounded-full h-1 relative">
                <div class="w-2/7 bg-orange-500 absolute top-0 left-0 rounded h-full"></div>
              </div>
              <div class="text-xs mx-2">2/7</div>
            </td>
          </tr>
          <tr class="text-center text-xs text-gray-500">
            <td class="p-2 font-medium">
              <div class="flex items-center justify-start cursor-pointer">
                <div class="">
                  <svg class="w-3 h-3" viewBox="0 0 511.992 511.992">
                    <path
                      d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"
                      fill="#f56565"
                    />
                  </svg>
                </div>
                <div class="mx-2">Alcohol</div>
              </div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-red-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-gray-300"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-red-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-red-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-red-500"></div>
            </td>
            <td class="p-2">
              <div class="w-6 cursor-pointer h-6 m-auto rounded hover:bg-red-400 bg-gray-300"></div>
            </td>

            <td class="p-2 flex items-center">
              <div class="w-2/4 bg-gray-200 rounded-full h-1 relative">
                <div class="w-4/7 bg-red-500 absolute top-0 left-0 rounded h-full"></div>
              </div>
              <div class="text-xs mx-2">4/7</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
