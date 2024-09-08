<template>
  <div class="bg-[#F1F5F9] h-screen">
    <!-- <div v-if="loading" class="flex justify-center items-center h-full">
      <p>Loading...</p>
    </div> -->
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
import { useRuntimeConfig } from "#app";

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
