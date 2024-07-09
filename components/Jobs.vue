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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="profile in profiles.results"
        :key="profile.id"
        class="bg-white p-4 rounded-lg"
      >
        <div
          class="flex justify-between items-center px-4 py-2 bg-[#F08080] rounded-md shadow-2xl w-[480px]"
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
            >
              <path
                d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6M10 11v5M14 11v5"
              ></path>
            </svg>
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
            >
              <path d="M12 20h9"></path>
              <path d="M12 4h9"></path>
              <path
                d="M4 12l8.5-8.5a2 2 0 012.8 0l5.7 5.7a2 2 0 010 2.8l-8.5 8.5a2 2 0 01-2.8 0l-5.7-5.7a2 2 0 010-2.8z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="text-center mt-1 bg-gray-200 rounded-md shadow-2xl py-6 h-[260px] w-[480px]"
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

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import JobDetail from "./JobDetail.vue";
import Popup from "./Popup.vue";

const profiles = ref([]);
const loading = ref(false);
const error = ref(null);
const currentProfile = ref(null);
const isPopupVisible = ref(false);

const fetchProfiles = async (
  url = "https://kuber123.pythonanywhere.com/adminapp/jobs/get_all_jobs"
) => {
  loading.value = true;
  error.value = null;

  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get(url, {
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

const viewMore = (profileId) => {
  currentProfile.value = profileId;
};

const showPopup = () => {
  isPopupVisible.value = true;
};

const hidePopup = () => {
  isPopupVisible.value = false;
};

const showProfiles = () => {
  currentProfile.value = null;
};

onMounted(fetchProfiles);
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>
