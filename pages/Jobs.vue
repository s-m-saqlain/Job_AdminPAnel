<template>
<div>
    <button
      @click="toggleSidebar"
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      :class="{
        'translate-x-0': sidebarOpen,
        '-translate-x-full': !sidebarOpen,
      }"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="h-full px-3 py-4 overflow-y-auto bg-[#1C2434] dark:bg-gray-800"
      >
        <ul class="space-y-2 font-medium">
          <div class="flex justify-between items-center mb-12">
            <img src="~/assets/images/logo.png" class="w-[12rem]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 sm:hidden text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click="crosstoggleSidebar"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <!-- <div
            class="flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          > -->
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="loadDashboard"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3 text-white">Dashboard</span>
            </a>
          </li>
          <!-- </div> -->
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="loadUsers"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-white"
                >Users</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="loadJobs"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-white">Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="loadFeedback"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-white"
                >Feedback</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="loadProfile"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-white"
                >Profile</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
              @click="logout"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-white"
                >Logout</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64">
      <div class="flex justify-end items-center">
        <div>
          <div class="flex justify-end items-center">
            <div>
              <p v-if="profile">
                {{ profile.data.fname }} {{ profile.data.lname }}
              </p>
              <p v-if="profile">{{ profile.data.email }}</p>
            </div>
            <img
              v-if="profile && profile.data.profile"
              :src="profileImageUrl"
              alt="Profile Image"
              class="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
      <div class="container mx-auto sm:h-full">
    <!-- <div v-if="loading" class="text-center h-screen">Loading...</div> -->
    <div v-if="loading" role="status" class="h-screen">
      <div class="flex justify-center items-center">
        <div class="pt-[12rem]">
          <svg
            aria-hidden="true"
            class="w-20 h-20 text-blue-500 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="text-blue-500 text-2xl font-normal">Loading...</span>
        </div>
      </div>
    </div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-if="!currentProfile">
      <div class="flex justify-end">
        <button
          @click="showPopup"
          class="bg-blue-500 text-white w-44 py-2 rounded-3xl font-medium text-xl"
        >
          Add
        </button>
        <Popup :isVisible="isPopupVisible" @hide="hidePopup" />
      </div>
      <div
        class="lg:flex justify-between gap-6 border border-gray-300 rounded-md sm:px-12 px-1 mt-6"
      >
        <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <svg
              class="w-12 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <input
              type="text"
              id="name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white lg:border-none"
              placeholder="Job Title"
              v-model="inputTitleValue"
              @input="filterJobs"
              @focus="showSuggestions = true"
            />
            <div class="cursor-pointer mx-6" @click="clearTitleInput">
              <svg
                class="h-5 w-5 text-black border border-black rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <div v-if="showSuggestions" id="suggestions" :class="filteredJobs.length > 3 ? 'h-96 overflow-y-auto' : ''" class="absolute bg-white border border-gray-200 mt-1 w-full">
            <div
              v-for="job in filteredJobs"
              :key="job.id"
              @click="selectJob(job.title)"
            >
              <p class="cursor-pointer px-12 py-4">{{ job.title }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
            </div>
          </div>
          </div>
        </div>

        <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-12 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 10.828l-3.428-3.434C6.254 16.92 5 14.652 5 12c0-3.86 3.141-7 7-7s7 3.14 7 7c0 2.652-1.254 4.92-3.572 6.394L12 21.828z"
              />
            </svg>

            <input
              type="text"
              id="name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="City"
              v-model="inputCityValue"
              @input="filterJobscity"
              @focus="showSuggestionscity = true"
            />

            <div class="cursor-pointer mx-6" @click="clearCityInput">
              <svg
                class="h-5 w-5 text-black border border-black rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <div v-if="showSuggestionscity" id="city" :class="filteredCities.length > 3 ? 'h-96 overflow-y-auto' : ''" class="absolute bg-white border border-gray-200 mt-1 w-full">
            <div
              v-for="city in filteredCities"
              :key="city.id"
              @click="selectJobcity(city.name)"
            >
              <p class="cursor-pointer py-4 px-12">{{ city.name }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
            </div>
          </div>
          </div>
        </div>

        <!-- Keyword Input -->
        <!-- <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-12 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM21 21l-6-6m2-2a3 3 0 00-4-4L5 15v3h3l7-7a3 3 0 004-4z"
              />
            </svg>
            <input
              type="text"
              id="keyword"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Keyword"
              v-model="inputKeywordValue"
              @input="filterJobs"
              @focus="showSuggestionscity = true"
            />
            <div class="cursor-pointer mx-6" @click="clearKeywordInput">
              <svg
                class="h-5 w-5 text-black border border-black rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div> -->

        <!-- Company Name Input -->
        <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-12 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 21v-4a2 2 0 012-2h2a2 2 0 012 2v4h4v-4a2 2 0 012-2h2a2 2 0 012 2v4h1.5a1.5 1.5 0 001.5-1.5v-16A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5V21h.5zM9 3v4M9 10v4M15 3v4M15 10v4M9 17v4M15 17v4"
              />
            </svg>
            <input
              type="text"
              id="company_name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Company Name"
              v-model="inputCompanyValue"
              @input="filterJobscompany"
              @focus="showSuggestionscompany = true"
            />
            <div class="cursor-pointer mx-6" @click="clearCompanyInput">
              <svg
                class="h-5 w-5 text-black border border-black rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <div v-if="showSuggestionscompany" id="company" :class="filteredCompany.length > 3 ? 'h-96 overflow-y-auto' : ''" class="absolute bg-white border border-gray-200 mt-1 w-full" >
            <div
              v-for="company in filteredCompany"
              :key="company.id"
              @click="selectJobcompany(company.title)"
            >
              <p class="cursor-pointer px-12 py-4">{{ company.title }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
            </div>
          </div>
          </div>
        </div>
        <button
          @click="discoverJobs"
          class="text-white font-bold bg-blue-500 cursor-pointer rounded-md w-44 h-12 mt-4"
        >
          Discover
        </button>
      </div>
      <div v-if="loading" role="status" class="h-screen">
        <div class="flex justify-center items-center">
          <div class="pt-[12rem]">
            <svg
              aria-hidden="true"
              class="w-20 h-20 text-blue-500 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="text-blue-500 text-2xl font-normal">Loading...</span>
          </div>
        </div>
      </div>
      <div
        v-if="!loading && !currentProfile"
        class="lg:grid lgrid-cols-1 md:grid-cols-2 gap-4"
      >
        <div
          v-for="profile in discoveredProfiles.length
            ? discoveredProfiles
            : profiles.results"
          :key="profile.id"
          class="bg-white p-4 rounded-lg"
        >
          <div
            class="flex justify-between items-center px-4 py-2 bg-[#F08080] rounded-md shadow-2xl lg:w-[480px]"
          >
            <p class="font-medium text-white">{{ profile.listing_platform }}</p>
            <div class="flex justify-between items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="cursor-pointer text-white"
                @click="showDeletePopup(profile)"
              >
                <path
                  d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6M10 11v5M14 11v5"
                ></path>
              </svg>
              <svg
                @click="updateshowPopup(profile.id)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="cursor-pointer text-white"
              >
                <path d="M12 20h9"></path>
                <path d="M12 4h9"></path>
                <path
                  d="M4 12l8.5-8.5a2 2 0 012.8 0l5.7 5.7a2 2 0 010 2.8l-8.5 8.5a2 2 0 01-2.8 0l-5.7-5.7a2 2 0 010-2.8z"
                ></path>
              </svg>
              <UpdatePopup
                v-if="updateisPopupVisible"
                :visible="updateisPopupVisible"
                :profileId="updateselectedProfileId"
                @close="updateisPopupVisible = false"
              />
            </div>
          </div>
          <div
            class="text-center mt-1 bg-gray-200 rounded-md shadow-2xl py-6 h-[260px] lg:w-[480px]"
          >
            <h1 class="text-xl font-semibold px-4">{{ profile.job_title }}</h1>
            <h2 class="text-[18px] font-medium pt-4">
              {{ profile.company_name }}
            </h2>
            <div class="flex justify-center items-center pt-4">
              <h3 class="text-[16px]">{{ profile.employment_type }}</h3>
              <div class="border-b border-b-black w-3 mx-2"></div>
              <h3 class="text-[16px]">{{ profile.seniority_level }}</h3>
            </div>
            <div class="flex justify-center items-center">
              <button
                @click="viewMore(profile.id)"
                class="uppercase bg-green-500 text-white w-[9rem] rounded-md py-2 mt-4"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
        <DeleteConfirmationPopup
          v-if="isPopupVisible1"
          :visible="isPopupVisible1"
          :profile="selectedProfile"
          @close="isPopupVisible1 = false"
          @confirm="handleClick"
        />
      </div>
    </div>
    <JobDetail
      v-if="currentProfile"
      :profileId="currentProfile"
      @back="showProfiles"
    />
    <div
      v-if="!currentProfile"
      class="flex justify-center items-center gap-6 mt-5"
    >
      <!-- <div v-if="loading" role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div> -->
      <button
        :disabled="!profiles.previous"
        @click="fetchProfiles(profiles.previous)"
        class="bg-green-500 py-2 px-5 font-bold rounded-md cursor-pointer text-white disabled:bg-gray-500"
      >
        Previous
      </button>
      <button
        :disabled="!profiles.next"
        @click="fetchProfiles(profiles.next)"
        class="bg-green-500 py-2 px-5 font-bold rounded-md cursor-pointer text-white disabled:bg-gray-500"
      >
        Next
      </button>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted, nextTick } from "vue";
import axios from "axios";
import JobDetail from "./jobdetail.vue";
import Popup from "~/components/Popup.vue";
import UpdatePopup from "~/components/Update_Popup.vue";
import DeleteConfirmationPopup from "~/components/DeleteConfirmationPopup.vue";

const isPopupVisible1 = ref(false);
const selectedProfile = ref<Profile | null>(null);

const showDeletePopup = (profile: Profile) => {
  selectedProfile.value = profile;
  isPopupVisible1.value = true;
};

import vClickOutside from "v-click-outside";

const clickOutsideDirective = vClickOutside.directive;

interface Profile {
  id: string;
}

interface ProfilesResponse {
  data: Profile[];
}

const profiles = ref<Profile[]>([]);
const discoveredProfiles = ref<Profile[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentProfile = ref<string | null>(null);
const isPopupVisible = ref<boolean>(false);
const updateisPopupVisible = ref<boolean>(false);
const updateselectedProfileId = ref<string | null>(null);

import { useRuntimeConfig } from "#app";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

const inputTitleValue = ref<string>("");

const filteredJobs = ref<Array<{ id: string; title: string }>>([]);
const filteredCities = ref<Array<{ id: string; name: string }>>([]);
const filteredCompany = ref<Array<{ title: string; id: string }>>([]);

const filterJobs = async () => {
  try {
    let url = `${baseURL}jobsScrap/getSuggestions/?`;

    if (inputTitleValue.value) {
      url += `query=${inputTitleValue.value}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (Array.isArray(data.jobs_suggestions)) {
      filteredJobs.value = data.jobs_suggestions.map(
        (job: [string, string]) => ({
          id: job[0],
          title: job[1],
        })
      );
    } else {
      console.error(
        "Expected jobs_suggestions to be an array but got:",
        data.jobs_suggestions
      );
      filteredJobs.value = [];
    }

    console.log("Filtered Jobs:", filteredJobs.value);

    await nextTick();
    showSuggestions.value = true;
  } catch (error) {
    console.error("Error fetching jobs and cities:", error);
  }
};

const filterJobscity = async () => {
  try {
    let url = `${baseURL}jobsScrap/getSuggestions/?`;

    if (inputCityValue.value) {
      url += `&city=${inputCityValue.value}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (data.city_suggestions) {
      filteredCities.value = data.city_suggestions.map(
        (city: string, index: number) => ({
          id: index,
          name: city,
        })
      );
    } else {
      console.error(
        "Expected city_suggestions to be an array but got:",
        data.city_suggestions
      );
      filteredCities.value = [];
    }

    console.log("Filtered Cities:", filteredCities.value);

    await nextTick();
    showSuggestionscity.value = true;
  } catch (error) {
    console.error("Error fetching jobs and cities:", error);
  }
};

const filterJobscompany = async () => {
  try {
    let url = `${baseURL}jobsScrap/getSuggestions/?`;

    if (inputCompanyValue.value) {
      url += `&company_name=${inputCompanyValue.value}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (Array.isArray(data.company_suggestions)) {
      filteredCompany.value = data.company_suggestions.map(
        (company_name: [string, string]) => ({
          title: company_name[0],
          id: company_name[1],
        })
      );
    } else {
      console.error(
        "Expected jobs_suggestions to be an array but got:",
        data.company_suggestions
      );
      filteredCompany.value = [];
    }

    console.log("Filtered Compan:", filteredCompany.value);

    await nextTick();
    showSuggestionscompany.value = true;
  } catch (error) {
    console.error("Error fetching jobs and cities:", error);
  }
};

const showSuggestions = ref(false);
const showSuggestionscity = ref(false);
const showSuggestionscompany = ref(false);

const selectJob = (jobTitle: string) => {
  inputTitleValue.value = jobTitle;
  showSuggestions.value = false;
};
const selectJobcity = (jobTitle: string) => {
  inputCityValue.value = jobTitle;
  showSuggestionscity.value = false;
};
const selectJobcompany = (jobTitle: string) => {
  inputCompanyValue.value = jobTitle;
  showSuggestionscompany.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const suggestionsElement = document.getElementById("suggestions");
  if (
    suggestionsElement &&
    !suggestionsElement.contains(event.target as Node)
  ) {
    showSuggestions.value = false;
  }
};

const handleClickOutsidecity = (event: MouseEvent) => {
  const suggestionsElement = document.getElementById("city");
  if (
    suggestionsElement &&
    !suggestionsElement.contains(event.target as Node)
  ) {
    showSuggestionscity.value = false;
  }
};

const handleClickOutsidecompany = (event: MouseEvent) => {
  const suggestionsElement = document.getElementById("company");
  if (
    suggestionsElement &&
    !suggestionsElement.contains(event.target as Node)
  ) {
    showSuggestionscompany.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

onMounted(() => {
  document.addEventListener("click", handleClickOutsidecity);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutsidecity);
});

onMounted(() => {
  document.addEventListener("click", handleClickOutsidecompany);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutsidecompany);
});

const clearTitleInput = () => {
  inputTitleValue.value = "";
  filterJobs();
};

// const clearTitleInput = () => {
//   inputTitleValue.value = "";
// };

const inputCityValue = ref<string>("");

const clearCityInput = () => {
  inputCityValue.value = "";
  filterJobs();
};

const inputKeywordValue = ref<string>("");

const clearKeywordInput = () => {
  inputKeywordValue.value = "";
  filterJobs();
};

const inputCompanyValue = ref<string>("");

const clearCompanyInput = () => {
  inputCompanyValue.value = "";
  filterJobs();
};

const constructApiUrl = () => {
  const baseUrl = "https://kuber123.pythonanywhere.com/jobsScrap/get_jobs/";
  const params = new URLSearchParams();

  if (inputTitleValue.value) {
    params.append("job_title", inputTitleValue.value);
  }

  if (inputCityValue.value) {
    params.append("city", inputCityValue.value);
  }

  // Check and append the company name if provided (commented out)
  // if (inputCompanyValue.value) {
  //   params.append('company_name', inputCompanyValue.value);
  // }

  return `${baseUrl}?${params.toString()}`;
};

const discoverJobs = async () => {
  try {
    const url = constructApiUrl();
    console.log("Discover API URL:", url);

    const response = await fetch(url);

    const data = await response.json();
    console.log("Discover API Response:", data.results);

    discoveredProfiles.value = data.results;
    profiles.value = data;
  } catch (error) {
    console.error("Error fetching jobs on discover:", error);
  }
};

const fetchProfiles = async (
  url: string = `${baseURL}adminapp/jobs/get_all_jobs`
): Promise<void> => {
  loading.value = true;
  error.value = null;

  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get<ProfilesResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profiles.value = response.data;
    if (discoveredProfiles.value.length) {
      discoveredProfiles.value = response.data.results;
    }
    console.log(profiles.value);
  } catch (err) {
    error.value = "Error fetching profiles data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const handleClick = async (profile: Profile): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found in local storage");
    }

    const response = await axios.delete(`${baseURL}adminapp/jobs/delete_job/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: profile.id,
      },
    });

    console.log("Delete successful", response.data);
    await fetchProfiles();
  } catch (err) {
    console.error("Error deleting profile", err);
  }
};

const viewMore = (profileId: string): void => {
  currentProfile.value = profileId;
};

const showPopup = (): void => {
  isPopupVisible.value = true;
};

const updateshowPopup = (profileId: string): void => {
  updateselectedProfileId.value = profileId;
  updateisPopupVisible.value = true;
};

const hidePopup = (): void => {
  isPopupVisible.value = false;
};

const showProfiles = (): void => {
  currentProfile.value = null;
};

onMounted(fetchProfiles);


import { useRouter } from "vue-router";

const router = useRouter();

const sidebarOpen = ref<boolean>(false);

const profile = ref<any>(null);

const profileImageUrl = computed(() => {
  return profile.value && profile.value.data.profile
    ? `${baseURL}${profile.value.data.profile}`
    : "";
});

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get(`${baseURL}adminapp/adminapi/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    profile.value = response.data;
    loading.value = false;
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
    loading.value = false;
  }
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const crosstoggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const logout = async (event: Event) => {
  event.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    alert("No token found. Please log in.");
    return;
  }

  try {
    const response = await axios.get(
      `${baseURL}adminapp/adminapi/admin_logout/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    localStorage.removeItem("token");
    router.push("/");
  } catch (err) {
    console.error("Error logging out:", err);
  }
};
</script>

<style scoped></style>
