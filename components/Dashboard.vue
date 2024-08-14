<template>
  <div class="bg-gray-100 h-screen">
    <div v-if="loading" class="flex justify-center items-center h-full">
      <p>Loading...</p>
    </div>
    <div
      v-else-if="error"
      class="flex justify-center items-center h-full text-red-500"
    >
      <p>{{ error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      <div class="card">
        <div class="flex justify-start items-center bg-white">
          <img
            src="~/assets/images/calender.svg"
            alt="card image"
            class="card-image w-20 h-20 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h2 class="card-title text-xl font-semibold mb-2">
              {{ dashboardData.all_users_count }}
            </h2>
            <p class="card-content text-gray-700"></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="flex justify-start items-center bg-white">
          <img
            src="~/assets/images/linkedin.svg"
            alt="card image"
            class="card-image w-20 h-20 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h2 class="card-title text-xl font-semibold mb-2">
              {{ dashboardData.all_jobs_count }}
            </h2>
            <p class="card-content text-gray-700"></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="flex justify-start items-center bg-white">
          <img
            src="~/assets/images/pen.svg"
            alt="card image"
            class="card-image w-20 h-20 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h2 class="card-title text-xl font-semibold mb-2">
              {{ dashboardData.all_linkedin_jobs_count }}
            </h2>
            <p class="card-content text-gray-700"></p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="flex justify-start items-center bg-white">
          <img
            src="~/assets/images/user.svg"
            alt="card image"
            class="card-image w-20 h-20 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h2 class="card-title text-xl font-semibold mb-2">
              {{ dashboardData.all_indeed_jobs_count }}
            </h2>
            <p class="card-content text-gray-700"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#app'

interface DashboardData {
  // Define the structure of your dashboard data here
  // Example:
  // id: number;
  // name: string;
  // ...
}

const dashboardData = ref<DashboardData | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const config = useRuntimeConfig()
const baseURL = config.public.baseURL

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "No token found. Please log in.";
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get<DashboardData>(
      `${baseURL}adminapp/users/dashboard`,
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
