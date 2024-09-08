<template>
  <div>
    <!-- <div v-if="loading" class="text-center">Loading...</div> -->
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
    <div
      v-if="!currentProfile && !currentProfile1 && dashboardData"
      class="grid grid-cols-1 lg:grid-cols-2 justify-center lg:ml-[3rem] sm:ml-0 ml-6 cursor-pointer"
    >
      <div
        v-for="feedback in dashboardData.results"
        :key="feedback.job_id"
        class="relative bg-[#2C3146] p-4 rounded-2xl shadow-md mt-[1rem] sm:h-[190px] h-[270px] lg:w-[520px] sm:w-96 w-[260px] lg:mx-0 sm:mx-8 mx-auto"
      >
        <img
          :src="`${baseURL}${feedback.user_detail.profile}`"
          alt="Profile Picture"
          class="absolute inset-0 sm:top-[57px] top-[95px] lg:-left-[510px] sm:-left-[390px] -left-[260px] w-20 h-20 object-cover rounded-full mx-auto"
        />
        <div class="text-center mt-4">
          <h3
            class="sm:w-[350px] mx-auto absolute inset-0 top-[2rem] font-semibold text-[18px] text-white sm:px-0 px-10"
            @click="showJobDetail(feedback.job_id)" 
            >
            {{ feedback.job_title }}
          </h3>
          <p
            class="absolute inset-0 sm:top-[100px] top-[160px] font-thin text-gray-100"
          >
            {{ feedback.user_detail.fname }}
            {{ feedback.user_detail.lname }}
          </p>
          <p
            class="absolute inset-0 sm:top-[120px] top-[180px] text-gray-400 pt-1"
          >
            {{ feedback.user_detail.email }}
          </p>
          <p
            class="absolute inset-0 sm:top-[150px] top-[230px] text-white font-medium sm:pt-2 pt-2 bg-pink-500 h-10"
            @click="showProfileDetail(feedback.user_detail.id)" 
          >
            {{ feedback.feedback_text }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div
        v-for="profile in profiles.results"
        :key="profile.id"
        class="relative bg-[#2C3146] p-4 rounded-2xl shadow-md mt-[4rem] h-[250px]"
      >
        <img
          :src="`https://kuber123.pythonanywhere.com${profile.profile}`"
          alt="Profile Picture"
          class="absolute inset-0 -top-[4rem] w-32 h-32 object-cover rounded-full mx-auto"
        />
        <div class="text-center mt-4">
          <h2 class="absolute inset-0 top-[5rem] text-xl text-white font-thin">
            {{ profile.fname }} {{ profile.lname }}
          </h2>
          <p class="absolute inset-0 top-[140px] text-gray-400">
            {{ profile.email }}
          </p>
          <div
            class="flex justify-center items-center absolute inset-0 top-[9rem]"
          >
            <button
              @click="viewMore(profile.id)"
              class="uppercase bg-green-500 text-white w-[9rem] rounded-md font-semibold py-2 mt-4"
            >
              View More
            </button>
          </div>
        </div>
      </div> -->
      <JobDetail
      v-if="currentProfile"
      :profileId="currentProfile"
      @back="showProfiles"
    />
    <ProfileDetail
      v-if="currentProfile1"
      :profileId="currentProfile1"
      @back="showProfiles1"
    />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
const currentProfile = ref<string | null>(null);
const currentProfile1 = ref<string | null>(null);

import JobDetail from "./JobDetail.vue";
import ProfileDetail from "./ProfileDetail.vue"

interface Feedback {
  id: number;
  user: string;
  feedback: string;
  rating: number;
  created_at: string;
  // Add other fields as necessary
}

interface FeedbackResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Feedback[];
}

const dashboardData = ref<FeedbackResponse | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const showJobDetail = (profileId: string) => {
  currentProfile.value = profileId;
};

const showProfileDetail = (profileId: string) => {
  currentProfile1.value = profileId;
};

const showProfiles = () => {
  currentProfile.value = null;
};

const showProfiles1 = () => {
  currentProfile1.value = null;
};

import { useRuntimeConfig } from "#app";
// import { ProfileDetail } from "#build/components";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get<FeedbackResponse>(
      `${baseURL}adminapp/job-feedback/user_all_feedbacks/?page=3`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dashboardData.value = response.data;
  } catch (err) {
    error.value = "Error fetching dashboard data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Add any required styles here */
</style>
