<template>
  <div>
    <h1>Profile Details for ID: {{ id }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="profile">
      <h2>{{ profile.fname }} {{ profile.lname }}</h2>
      <p>{{ profile.email }}</p>
      <!-- Add more fields as necessary -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const id = ref(route.params.id);
console.log(id.value);

const profile = ref(null);
const error = ref(null);
const loading = ref(false);

import { useRuntimeConfig } from '#app'
const config = useRuntimeConfig()
const baseURL = config.public.baseURL

const fetchProfile = async () => {
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
      `${baseURL}adminapp/users/get_user_detail/${id.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile.value = response.data;
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProfile);
</script>
