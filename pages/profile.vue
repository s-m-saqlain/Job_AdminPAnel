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
            <NuxtLink to="/dashboards">
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
              <p v-if="profile">
                {{ profile.data.fname }} {{ profile.data.lname }}
              </p>
              <p v-if="profile">{{ profile.data.email }}</p>
            </div>
            <img
              v-if="profile && profile.data.profile"
              :src="profileImageUrl1"
              alt="Profile Image"
              class="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
      <div class="bg-[#F1F5F9]">
    <div
      class="bg-white mx-12 mx-auto lg:w-[45rem] shadow-md lg:p-20 sm:mt-0 mt-14"
    >
      <form @submit.prevent="submitForm">
        <h1 class="text-center text-3xl font-bold text-green-500 lg:pt-0 sm:pt-12">Update Profile</h1>
        <div class="my-12 lg:flex justify-center">
          <img
            v-if="previewImageUrl"
            :src="previewImageUrl"
            alt="Profile Image"
            class="w-32 h-32 object-cover"
          />
          <img
            v-else-if="profileData && profileData.profile"
            :src="profileImageUrl"
            alt="Profile Image"
            class="w-20 h-20 object-cover rounded-full"
          />
          <div class="mb-4">
            <label class="block text-gray-700">Profile Image</label>
            <input
              type="file"
              @change="handleFileChange"
              class="lg:w-full sm:w-64 w-64 px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div class="lg:flex justify-between items-center gap-3">
          <div class="mb-4 lg:w-full sm:w-96">
            <label class="block text-gray-700">First Name</label>
            <input
              v-model="profileData.firstname"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="First Name"
            />
            <span v-if="errors.firstname" class="text-red-500">{{
              errors.firstname
            }}</span>
          </div>

          <div class="mb-4 lg:w-full sm:w-96">
            <label class="block text-gray-700">Last Name</label>
            <input
              v-model="profileData.lastname"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Last Name"
            />
            <span v-if="errors.lastname" class="text-red-500">{{
              errors.lastname
            }}</span>
          </div>
        </div>

        <div class="lg:flex justify-between items-center gap-3">
          <div class="mb-4 lg:w-full sm:w-96">
            <label class="block text-red-500">Email</label>
            <input
              v-model="profileData.email"
              type="email"
              class="w-full px-3 py-2 border rounded-lg text-red-500"
              placeholder="Email"
              disabled
            />
          </div>

          <div class="mb-4 lg:w-full sm:w-96">
            <label class="block text-gray-700">Contact</label>
            <input
              v-model="profileData.contact"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Contact"
            />
            <span v-if="errors.contact" class="text-red-500">{{
              errors.contact
            }}</span>
          </div>
        </div>

        <div class="mb-4 lg:w-full sm:w-96">
          <label class="block text-gray-700">Address</label>
          <input
            v-model="profileData.address"
            type="text"
            class="w-full px-3 py-2 border rounded-lg"
            placeholder="Address"
          />
          <span v-if="errors.address" class="text-red-500">{{
            errors.address
          }}</span>
        </div>

        <button
          type="submit"
          class="lg:w-full sm:w-96 w-full bg-blue-500 text-white py-4 font-bold text-xl rounded-lg hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  profile: string;
  address: string;
}

const profileData = ref<ProfileData>({
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  profile: "",
  address: "",
});

const errors = ref({
  firstname: "",
  lastname: "",
  contact: "",
  address: "",
});

const profileImageUrl = computed(() => {
  return profileData.value && profileData.value.profile
    ? `${baseURL}${profileData.value.profile}`
    : "";
});

const selectedImage = ref<File | null>(null);
const previewImageUrl = ref<string | null>(null);

const validateForm = () => {
  errors.value.firstname = !profileData.value.firstname
    ? "First Name is required"
    : "";
  errors.value.lastname = !profileData.value.lastname
    ? "Last Name is required"
    : "";
  errors.value.contact = !profileData.value.contact
    ? "Contact is required"
    : "";
  errors.value.address = !profileData.value.address
    ? "Address is required"
    : "";

  return (
    !errors.value.firstname &&
    !errors.value.lastname &&
    !errors.value.contact &&
    !errors.value.address
  );
};

const fetchProfileData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseURL}adminapp/adminapi/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profileData.value = {
      firstname: response.data.data.fname,
      lastname: response.data.data.lname,
      email: response.data.data.email,
      contact: response.data.data.contact,
      profile: response.data.data.profile,
      address: response.data.data.address,
    };
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    selectedImage.value = target.files[0];
    previewImageUrl.value = URL.createObjectURL(target.files[0]);
  }
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("fname", profileData.value.firstname);
    formData.append("lname", profileData.value.lastname);
    formData.append("contact", profileData.value.contact);
    formData.append("address", profileData.value.address);

    if (selectedImage.value) {
      formData.append("profile", selectedImage.value);
    }

    await axios.put(`${baseURL}adminapp/adminapi/profile/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Profile updated successfully");
    window.location.reload();
    alert("Profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

onMounted(() => {
  fetchProfileData();
});

import { useRouter } from "vue-router";

const router = useRouter();

const sidebarOpen = ref<boolean>(false);

const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const profile = ref<any>(null);

const profileImageUrl1 = computed(() => {
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
