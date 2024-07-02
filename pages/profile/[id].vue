<template>
  <div class="container mx-auto">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-if="profile" class="profile-detail">
      <img :src="`https://kuber123.pythonanywhere.com${profile.profile}`" alt="Profile Picture"
        class="w-32 h-32 object-cover rounded-full mx-auto" />
      <div class="text-center mt-4">
        <h2 class="text-xl font-semibold">
          {{ profile.fname }} {{ profile.lname }}
        </h2>
        <p class="text-gray-600">{{ profile.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const profile = ref(null);
const loading = ref(false);
const error = ref(null);

const route = useRoute();

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
    const response = await axios.get(`https://kuber123.pythonanywhere.com/adminapp/users/get_user_detail/?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profile.value = response.data.data;
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {

  const id = route.params.id
  if (id) {
    fetchProfile(id);
  }
});
</script>

<style scoped>
.container {
  padding: 2rem;
}

.profile-detail {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>