<template>
  <div class="container">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-if="!currentProfile && profile" class="profile-detail">
      <div class="lg:flex justify-start items-center">
        <button
          @click="$emit('back')"
          class="uppercase bg-red-500 text-white rounded-md px-3 py-3 font-semibold lg:mb-[3rem] sm:mb-12 mb-[3rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div class="lg:flex justify-between items-center">
        <div class="lg:flex justify-start gap-3">
          <img
            :src="`https://kuber123.pythonanywhere.com${profile.profile}`"
            alt="Profile Picture"
            class="w-32 h-32 object-cover bg-white rounded-full"
          />
          <div class="">
            <div class="lg:flex justify-start items-center gap-1">
              <p class="font-semibold text-[18px]">Name:</p>
              <h2 class="text-xl font-thin">
                {{ profile.fname }} {{ profile.lname }}
              </h2>
            </div>
            <div class="lg:flex justify-start items-center gap-1 pt-2">
              <p class="font-semibold text-[18px]">Contact:</p>
              <p class="text-xl font-thin">{{ profile.contact }}</p>
            </div>
            <div class="lg:flex justify-start items-center gap-1 pt-2">
              <p class="font-semibold text-[18px]">Email:</p>
              <p class="text-xl font-thin">{{ profile.email }}</p>
            </div>
            <div class="lg:flex justify-start gap-1 pt-2">
              <p class="font-semibold text-[18px]">Street Address:</p>
              <p class="text-xl font-thin lg:w-[500px]">
                {{ profile.street_address }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              v-model="isActive"
              @change="updateProfileStatus"
            />
            <div
              class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              :class="{
                'bg-blue-600': isActive,
                'bg-gray-200 dark:bg-gray-700': !isActive,
              }"
            ></div>
            <span
              class="ms-3 text-[22px] font-semibold text-gray-900 dark:text-gray-300"
              :class="{ 'text-red-600': !isActive }"
              >{{ isActive ? "Active" : "Non-Active" }}</span
            >
          </label>
          <p class="text-[22px] font-medium lg:text-end text-gray-500 pt-5">
            Last Login: {{ profile.last_login }}
          </p>
        </div>
      </div>
      <div
        class="mt-12 border border-black rounded-md bg-white px-6 py-6 sm:w-full w-[215px]"
      >
        <h1 class="text-2xl font-medium text-gray-500">Feedbacks</h1>
        <div
          class="mt-6 cursor-pointer"
          v-for="item in profile.all_feedbacks"
          :key="item.id"
        >
          <p class="text-black font-bold text-gray-500 w-full" @click="showJobDetail(item.job_id)">
            {{ item.job_title }}
          </p>
          <p class="text-gray-500" @click="showJobDetail(item.job_id)">
            {{ item.feedback_text }}
          </p>
          <div class="border-b border-b-gray-400 mt-6"></div>
        </div>
      </div>
      <div class="lg:flex justify-start gap-12 items-start mt-6">
        <div>
          <p class="text-2xl font-medium text-gray-500">Viewed Jobs:</p>
          <div class="mt-6" v-for="item in profile.viewed_jobs" :key="item.id">
            <p
              class="text-black font-medium text-white bg-black rounded-md px-4 py-3 cursor-pointer"
              @click="showJobDetail(item.job_id)"
            >
              {{ item.job_title }}
            </p>
          </div>
        </div>
        <div>
          <p class="text-2xl font-medium text-gray-500 lg:pt-0 pt-5">
            Saved Jobs:
          </p>
          <div class="mt-6" v-for="item in profile.saved_jobs" :key="item.id">
            <p
              class="text-black font-medium text-white bg-gray-500 rounded-md px-4 py-3 cursor-pointer"
              @click="showJobDetail(item.job_id)"
            >
              {{ item.job_title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <JobDetail
      v-if="currentProfile"
      :profileId="currentProfile"
      @back="showProfiles"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import JobDetail from "./JobDetail.vue";

const isActive = ref(true);

const props = defineProps({
  profileId: String,
});

const profile = ref(null);
const loading = ref(false);
const error = ref(null);
const currentProfile = ref(null);

const fetchProfile = async (id) => {
  loading.value = true;
  error.value = null;

  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get(
      `https://kuber123.pythonanywhere.com/adminapp/users/get_user_detail/?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile.value = response.data.data;
    isActive.value = profile.value.status === true;
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const updateProfileStatus = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    return;
  }

  try {
    await axios.put(
      `https://kuber123.pythonanywhere.com/adminapp/users/update_user_status/`,
      { id: props.profileId, status: isActive.value },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    error.value = "Error updating profile status.";
    console.error(err);
  }
};

const showJobDetail = (profileId) => {
  currentProfile.value = profileId;
};

const showProfiles = () => {
  currentProfile.value = null;
};

onMounted(() => {
  if (props.profileId) {
    fetchProfile(props.profileId);
  }
});

watch(
  () => props.profileId,
  (newId) => {
    if (newId) {
      fetchProfile(newId);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* .container {
  padding: 2rem;
}

.profile-detail {
  padding: 2rem;
} */
</style>
