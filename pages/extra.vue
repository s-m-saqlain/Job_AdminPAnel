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
            <NuxtLink to="/dashboard">
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
            </NuxtLink>
          </li>
          <!-- </div> -->
          <li>
            <NuxtLinks to="/users">
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
            </NuxtLinks>
          </li>
          <li>
            <NuxtLink to="/jobs">
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
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/feedback">
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
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile">
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
            </NuxtLink>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import axios from "axios";
import Popup from "~/components/Popup.vue";
import UpdatePopup from "~/components/Update_Popup.vue";

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
