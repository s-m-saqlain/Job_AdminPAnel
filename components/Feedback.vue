<template>
  <div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div
      v-if="dashboardData"
      class="grid grid-cols-1 lg:grid-cols-2 justify-center lg:ml-[3rem] sm:ml-0 ml-6 cursor-pointer"
    >
      <div
        v-for="feedback in dashboardData.results"
        :key="feedback.job_id"
        class="relative bg-[#2C3146] p-4 rounded-2xl shadow-md mt-[1rem] sm:h-[190px] h-[270px] lg:w-[520px] sm:w-96 w-[260px] lg:mx-0 sm:mx-8 mx-auto"
      >
        <img
          :src="`https://kuber123.pythonanywhere.com${feedback.user_detail.profile}`"
          alt="Profile Picture"
          class="absolute inset-0 sm:top-[57px] top-[95px] lg:-left-[510px] sm:-left-[390px] -left-[260px] w-20 h-20 object-cover rounded-full mx-auto"
        />
        <div class="text-center mt-4">
          <h3
            class="sm:w-[350px] mx-auto absolute inset-0 top-[2rem] font-semibold text-[18px] text-white sm:px-0 px-10"
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
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dashboardData = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get(
      "https://kuber123.pythonanywhere.com/adminapp/job-feedback/user_all_feedbacks/?page=3",
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
