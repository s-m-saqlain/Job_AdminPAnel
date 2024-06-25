<template>
  <div class="container mx-auto">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-if="profiles.results" class="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
      <div v-for="profile in profiles.results" :key="profile.id" class="bg-white p-4 rounded-lg shadow-md">
        <img :src="`https://kuber123.pythonanywhere.com${profile.profile}`" alt="Profile Picture"
          class="w-32 h-32 object-cover rounded-full mx-auto" />
        <div class="text-center mt-4">
          <h2 class="text-xl font-semibold">
            {{ profile.fname }} {{ profile.lname }}
          </h2>
          <p class="text-gray-600">{{ profile.email }}</p>
          <div class="flex justify-center items-center">
            <!-- Use nuxt-link to navigate to profile detail -->
            <nuxt-link :to="`/profile/${profile.id}`"
              class="uppercase bg-green-500 text-white w-[9rem] rounded-md font-semibold py-2 mt-4">
              View More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-6 mt-5">
      <button :disabled="!profiles.previous" @click="fetchProfiles(profiles.previous)"
        class="bg-green-500 py-2 px-5 font-bold rounded-md cursor-pointer text-white disabled:bg-gray-500">
        Previous
      </button>
      <button :disabled="!profiles.next" @click="fetchProfiles(profiles.next)"
        class="bg-green-500 py-2 px-5 font-bold rounded-md cursor-pointer text-white disabled:bg-gray-500">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const profiles = ref([]);
const loading = ref(false);
const error = ref(null);

const router = useRouter(); // Initialize router

const fetchProfiles = async (
  url = "https://kuber123.pythonanywhere.com/adminapp/users/profiles"
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

// Function to navigate to profile detail page
const viewMore = (id) => {
  router.push(`/profile/${id}`); // Use backticks for string interpolation
};

onMounted(fetchProfiles);
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>
