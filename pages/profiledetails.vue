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
            <NuxtLink to="/users">
              <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
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
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/jobs">
              <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#333A48] dark:hover:bg-gray-700 group"
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
              <p v-if="profile1">
                {{ profile1.data.fname }} {{ profile1.data.lname }}
              </p>
              <p v-if="profile1">{{ profile1.data.email }}</p>
            </div>
            <img
              v-if="profile1 && profile1.data.profile"
              :src="profileImageUrl"
              alt="Profile Image"
              class="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
      <div class="container">
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
    <div v-if="!currentProfile && profile" class="profile-detail">
      <div class="lg:flex justify-start items-center">
      </div>
      <div class="lg:flex justify-between items-center">
        <div class="lg:flex justify-start gap-3">
          <img
            :src="`${baseURL}${profile.profile}`"
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
        <!-- {{item.job_id}} -->
        <NuxtLink :to="{ path: '/jobdetail', query: { id: item.job_id } }">
          <p
            class="text-black font-bold text-gray-500 w-full"
          >
            {{ item.job_title }}
          </p>
          </NuxtLink>
          <NuxtLink to="/jobdetail">
          <p class="text-gray-500">
            {{ item.feedback_text }}
          </p>
          </NuxtLink>
          <div class="border-b border-b-gray-400 mt-6"></div>
        </div>
      </div>
      <div class="lg:flex justify-start gap-12 items-start mt-6">
        <div>
          <p class="text-2xl font-medium text-gray-500">Viewed Jobs:</p>
          <div class="mt-6" v-for="item in profile.viewed_jobs" :key="item.id">
            <NuxtLink :to="{ path: '/jobdetail', query: { id: item.job_id } }">
            <p
              class="text-black font-medium text-white bg-black rounded-md px-4 py-3 cursor-pointer"
            >
              {{ item.job_title }}
            </p>
            </NuxtLink>
          </div>
        </div>
        <div>
          <p class="text-2xl font-medium text-gray-500 lg:pt-0 pt-5">
            Saved Jobs:
          </p>
          <div class="mt-6" v-for="item in profile.saved_jobs" :key="item.id">
            <NuxtLink :to="{ path: '/jobdetail', query: { id: item.job_id } }">
            <p
              class="text-black font-medium text-white bg-gray-500 rounded-md px-4 py-3 cursor-pointer"
            >
              {{ item.job_title }}
            </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';
const route = useRoute();

const isActive = ref<boolean>(true);

import { useRuntimeConfig } from '#app'
const config = useRuntimeConfig()
const baseURL = config.public.baseURL

const props = defineProps<{
  profileId: string;
}>();

const profile = ref<any>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentProfile = ref<string | null>(null);

const fetchProfile = async (id: string) => {
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
      `${baseURL}adminapp/users/get_user_detail/?id=${id}`,
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
      `${baseURL}adminapp/users/update_user_status/`,
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

onMounted(() => {
  const id = route.query.id as string;
  if (id) {
    fetchProfile(id);
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

import { useRouter } from "vue-router";

const router = useRouter();

const sidebarOpen = ref<boolean>(false);

const profile1 = ref<any>(null);

const profileImageUrl = computed(() => {
  return profile1.value && profile1.value.data.profile
    ? `${baseURL}${profile1.value.data.profile}`
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
    profile1.value = response.data;
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

<style scoped>
/* .container {
  padding: 2rem;
}

.profile-detail {
  padding: 2rem;
} */
</style>
