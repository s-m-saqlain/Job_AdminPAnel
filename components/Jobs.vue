<template>
  <div class="container mx-auto sm:h-full">
    <div v-if="loading" class="text-center h-screen">Loading...</div>
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
          <div v-if="showSuggestions" id="suggestions">
            <div
              v-for="job in filteredJobs"
              :key="job.id"
              @click="selectJob(job.title)"
            >
              <p class="cursor-pointer">{{ job.title }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
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
          <div v-if="showSuggestionscity" id="city">
            <div
              v-for="city in filteredCities"
              :key="city.id"
              @click="selectJobcity(city.name)"
            >
              <p class="cursor-pointer">{{ city.name }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
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
          <div v-if="showSuggestionscompany" id="company">
            <div
              v-for="company in filteredCompany"
              :key="company.id"
              @click="selectJobcompany(company.title)"
            >
              <p class="cursor-pointer">{{ company.title }}</p>
              <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
              <!-- Add other job details as needed -->
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

      <div class="lg:grid lgrid-cols-1 md:grid-cols-2 gap-4">
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
                @click="handleClick(profile)"
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import axios from "axios";
import JobDetail from "./JobDetail.vue";
import Popup from "./Popup.vue";
import UpdatePopup from "./Update_Popup.vue";

import vClickOutside from "v-click-outside";

const clickOutsideDirective = vClickOutside.directive;

// Define interfaces for the response data structure
interface Profile {
  id: string;
  // Define other fields based on your data structure
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

const inputTitleValue = ref<string>(""); // Declare the input value as a string

const filteredJobs = ref<Array<{ id: string; title: string }>>([]); // Declare filteredJobs with proper type
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

    // Process job suggestions
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

    // Process city suggestions
    if (data.city_suggestions) {
      filteredCities.value = data.city_suggestions.map(
        (city: string, index: number) => ({
          id: index, // Using the index as the ID
          name: city, // The city name is the string itself
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
  showSuggestions.value = false; // Hide the suggestions after selection
};
const selectJobcity = (jobTitle: string) => {
  inputCityValue.value = jobTitle;
  showSuggestionscity.value = false; // Hide the suggestions after selection
};
const selectJobcompany = (jobTitle: string) => {
  inputCompanyValue.value = jobTitle;
  showSuggestionscompany.value = false; // Hide the suggestions after selection
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
  filterJobs(); // Clear the filtered jobs
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

    discoveredProfiles.value = data.results; // Set the discovered profiles
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
</script>

<style scoped></style>
