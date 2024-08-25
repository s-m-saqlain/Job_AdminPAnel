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
            <input
              type="text"
              id="name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white lg:border-none"
              placeholder="Job Title"
              v-model="inputTitleValue"
              @input="filterJobs"
              @focus="showSuggestions = true"
            />
            <div class="cursor-pointer mx-6" @click="clearTitleInput"></div>
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
            <input
              type="text"
              id="name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="City"
              v-model="inputCityValue"
              @input="filterJobs"
            />

            <div class="cursor-pointer mx-6" @click="clearCityInput"></div>
          </div>
          <div v-for="city in filteredCities" :key="city.id">
            <p>{{ city.name }}</p>
            <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
            <!-- Add other job details as needed -->
          </div>
        </div>

        <!-- Keyword Input -->
        <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <input
              type="text"
              id="keyword"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Keyword"
              v-model="inputKeywordValue"
              @input="filterJobs"
            />
            <div class="cursor-pointer mx-6" @click="clearKeywordInput"></div>
          </div>
        </div>

        <!-- Company Name Input -->
        <div class="my-4">
          <div
            class="flex justify-between items-center lg:border lg:border-t border-t-white lg:border-l border-l-white lg:border-b lg:border-b-white border-b border-b-gray-400 lg:border-r border-r-black py-1"
          >
            <input
              type="text"
              id="company_name"
              class="w-full sm:pl-5 pl-1 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Company Name"
              v-model="inputCompanyValue"
              @input="filterJobs"
            />
            <div class="cursor-pointer mx-6" @click="clearCompanyInput"></div>
          </div>
          <div v-for="company in filteredCompany" :key="company.id">
            <p>{{ company.title }}</p>
            <!-- <p>{{ job.company_name }}</p>
      <p>{{ job.company_location }}</p> -->
            <!-- Add other job details as needed -->
          </div>
        </div>
        <button
          class="text-white font-bold bg-blue-500 cursor-pointer rounded-md w-44 h-12 mt-4"
        >
          Discover
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
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
    } else if (inputCityValue.value) {
      url += `&city=${inputCityValue.value}`;
    } else if (inputKeywordValue.value) {
      url += `keyword=${inputKeywordValue.value}`;
    } else if (inputCompanyValue.value) {
      url += `&company_name=${inputCompanyValue.value}`;
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

    console.log("Filtered Jobs:", filteredJobs.value);
    console.log("Filtered Cities:", filteredCities.value);
    console.log("Filtered Compan:", filteredCompany.value);
  } catch (error) {
    console.error("Error fetching jobs and cities:", error);
  }
};

const showSuggestions = ref(false);

const selectJob = (jobTitle: string) => {
  inputTitleValue.value = jobTitle;
  showSuggestions.value = false; // Hide the suggestions after selection
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

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
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
