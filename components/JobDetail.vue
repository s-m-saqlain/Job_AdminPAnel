<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-4xl font-semibold">Job Detail</h1>
      <div class="flex justify-between items-center gap-1">
        <p class="text-xl font-thin">Dashboard</p>
        <div class="text-xl font-thin">/</div>
        <p class="text-xl font-thin text-green-500">Job Detail</p>
      </div>
    </div>
    <div class="container bg-gray-200 h-full mt-6">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
      <div v-if="profile" class="profile-detail">
        <div class="lg:flex justify-start items-center">
          <button @click="$emit('back')"
            class="uppercase bg-red-500 text-white rounded-md px-3 py-3 font-semibold lg:mb-[3rem] sm:mb-12 mb-[3rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <p class="ml-2 text-xl text-bold">Job Detail</p>
        <div class="my-1 border-t border-gray-500 w-full"></div>
        <div class="lg:flex justify-between items-center">
          <div class="lg:flex justify-start gap-3"></div>
          <div></div>
        </div>
        <div>
          <div class="mt-4" v-for="item in profile" :key="item.id">
            <p class="text-black font-semibold text-2xl ml-2">
              {{ item.job_title }}
            </p>
            <!-- <p class="text-black">{{item.job_description}}</p> -->
          </div>
           <div v-html="htmlContent"></div>

          <!-- <p class="text-black">{{ htmlContent }}</p> -->

          <!-- <div v-if="formattedJobDescription" v-html="formattedJobDescription" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import DOMPurify from 'dompurify';
import axios from "axios";

const formattedContent = ref('');
const htmlContent = ref('');

const props = defineProps({
  profileId: String,
});

const profile = ref(null);
const loading = ref(false);
const error = ref(null);

const jobData = reactive({
  job_description: "",
  links: "",
});

const formattedJobDescription = ref('');

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
      `https://kuber123.pythonanywhere.com/adminapp/jobs/get_job_detail?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile.value = response.data;
    htmlContent.value = response.data.data.job_description; // Adjust according to your data structure
    // formattedContent.value = DOMPurify.sanitize(htmlContent, { RETURN_DOM_FRAGMENT: true }).textContent.trim();
    //   console.log(formattedContent)
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
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
