<template>
    <div class="block sm:flex-grow sm:flex sm:items-center z-20">
        <div
          class="sm:w-search-box relative ml-auto mt-3 sm:mt-0"
        >
          <input
            type="search"
            placeholder="Search"
            class="w-full min-w-head-comp sm:min-w-0 h-10 bg-background-search text-sm text-black border-gray-800 focus:outline-none focus:border-gray-600 rounded-xl py-1 px-2 pl-10"
          />
          <div class="absolute search-icon" style="top: 0.875rem; left: 1rem">
            <svg
              class="fill-current pointer-events-none text-gray-500 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="sm:w-contact-button ml-0 sm:ml-30px mt-3 sm:mt-0">
          <button
            class="w-full min-w-head-comp sm:min-w-0 h-10 bg-green text-white text-base font-medium leading-5 rounded-lg py-1 px-2 text-center hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 "
          >
            Contact Us
          </button>
        </div>
    </div>
</template>