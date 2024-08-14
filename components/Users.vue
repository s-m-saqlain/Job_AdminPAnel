<template>
  <div class="container mx-auto bg-gray-100 sm:h-full">
    <div v-if="loading" class="text-center h-screen">Loading...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div
      v-if="!currentProfile"
      class="grid grid-cols-1 md:grid-cols-5 gap-4 cursor-pointer"
    >
      <div
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
      </div>
    </div>
    <ProfileDetail
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

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import ProfileDetail from "./ProfileDetail.vue";

interface Profile {
  id: number;
  // Add other fields as needed
}

const profiles = ref<Profile[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentProfile = ref<number | null>(null);

import { useRuntimeConfig } from '#app'
const config = useRuntimeConfig()
const baseURL = config.public.baseURL

const fetchProfiles = async (
  url: string = `${baseURL}adminapp/users/profiles`
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
  } catch (err) {
    error.value = "Error fetching profiles data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const viewMore = (profileId: number) => {
  currentProfile.value = profileId;
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
