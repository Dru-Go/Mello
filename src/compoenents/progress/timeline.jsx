import React from 'react'

export default function timeline() {
    return (
      <div>
        <div class="mt-6">
          <div class="w-full bg-gray-200 rounded-full h-2 relative">
            <div class="w-4/7 bg-yellow-500 absolute top-0 left-0 rounded h-full"></div>
            <div class="w-1/7 bg-green-500 absolute top-0 left-0 rounded h-full"></div>
          </div>
        </div>
        <div class="mt-3 flex items-center justify-between">
          <div class="flex items-center">
            <div class="text-green-500">
              <svg
                class="fill-current w-3 h-3 rotate"
                viewBox="0 0 492 492"
              >
                <g>
                  <path d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872    L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24    L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12    c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076    c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z" />
                </g>
              </svg>
            </div>
            <div class="text-xs ml-4 text-gray-500 font-medium">
              Up 25% from the week before
            </div>
          </div>
          <div class="text-xs text-gray-500 font-medium">27% achived</div>
        </div>
        <div class="border-b mt-3 w-full border-gray-500 border-dotted rounded h-1"></div>
      </div>
    );
}
