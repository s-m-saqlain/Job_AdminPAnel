<template>
  <div>
    <div
      v-if="!currentProfile && profile"
      class="flex justify-between items-center"
    >
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
      <div v-if="!currentProfile && profile" class="profile-detail">
        <div class="lg:flex justify-start items-center ml-2 pt-6">
          <button
            @click="$emit('back')"
            class="uppercase bg-red-500 text-white rounded-md px-3 py-3 font-semibold lg:mb-[3rem] sm:mb-12 mb-[3rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M15 19l-7-7 7-7"
              />
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
            <div class="flex justify-between items-start">
              <div>
                <p class="text-black font-semibold text-2xl ml-8">
                  {{ item.job_title }}
                </p>
                <!-- <button class="bg-green-500 text-white rounded-3xl font-thin py-2 px-4 mr-12">Views:0</button> -->
                <div class="flex justify-strat item-center mt-6 ml-[4rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class=""
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
                    />
                  </svg>
                  <p class="text-black">{{ item.company_location }}</p>
                </div>
                <p class="text-black ml-[5rem] mt-4 text-3xl font-thin">
                  {{ item.job_function }}
                </p>
                <p
                  class="text-white font-thin bg-blue-500 ml-[5rem] w-12 mt-4 py-1 px-1"
                >
                  {{ item.employment_type }}
                </p>
                <p class="text-black font-thin ml-[5rem] text-2xl mt-4">
                  {{ item.industries }}
                </p>
                <!-- <p class="text-black">{{item.job_description}}</p> -->
              </div>
              <div>
                <button
                  class="bg-green-500 text-white rounded-3xl font-thin py-2 px-4 ml-[9rem]"
                >
                  Views:0
                </button>
                <div class="pr-[6rem]">
                  <img
                    src="~/assets/images/linkedinlogo.png"
                    class="w-[10rem]"
                  />
                  <p class="text-black text-xl">
                    Seniority: {{ item.seniority_level }}
                  </p>
                  <button
                    class="bg-green-500 text-white w-64 rounded-3xl py-2"
                    @click="joburl"
                  >
                    Apply for this job
                  </button>
                  <p class="text-black text-center pt-2 font-semibold">
                    Admin Feedback
                  </p>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-black"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button
            class="bg-blue-600 text-white py-2 w-[500px] rounded-2xl ml-[5rem] mt-3"
            @click="companyurl"
          >
            View Company
          </button>
          <div class="flex justify-between mx-6 mt-[6rem]">
            <div class="pb-8 w-[600px]" v-html="htmlContent"></div>
            <div>
              <div
                v-for="item in profile.data.users_feedback"
                :key="item.user.id"
              >
                <div
                  class="relative bg-[#2C3146] mt-[6rem] w-[300px] rounded-3xl py-4 h-[250px]"
                >
                  <img
                    :src="`https://kuber123.pythonanywhere.com${item.user.profile}`"
                    @click="showJobDetail(item.user.id)"
                    alt="Profile Picture"
                    class="cursor-pointer hover:shadow-red w-32 h-32 object-cover bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 -top-16 mx-auto"
                  />
                  <p
                    class="absolute top-[4rem] inset-0 text-white text-center font-thin text-xl pt-3"
                  >
                    {{ item.user.fname }} {{ item.user.lname }}
                  </p>
                  <p
                    class="absolute top-[100px] inset-0 text-gray-400 font-thin text-[15px] text-center"
                  >
                    {{ item.user.email }}
                  </p>
                  <!-- <p
                    class="text-white bg-blue-500 text-center font-medium mt-3 w-[12rem] mx-auto py-1"
                  >
                    {{ item.feedback_text }}
                  </p> -->
                  <p
                    class="absolute inset-0 top-[8rem] text-white font-medium text-[15px] text-center mt-6"
                  >
                    {{ item.user.fname }} FeedBack
                  </p>
                  <p
                    class="absolute inset-0 top-[11rem] text-gray-300 text-center font-thin w-[12rem] mx-auto py-1"
                  >
                    {{ item.feedback_text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <p class="text-black">{{ htmlContent }}</p> -->
          <!-- <div v-if="formattedJobDescription" v-html="formattedJobDescription" /> -->
        </div>
      </div>
    </div>
    <ProfileDetail
      v-if="currentProfile"
      :profileId="currentProfile"
      @back="showProfiles"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import DOMPurify from "dompurify";
import axios from "axios";
import ProfileDetail from "./ProfileDetail.vue";

// Define interfaces for the response data structure
interface ProfileData {
  id: string;
  job_description: string;
  links: string;
  company_url: string;
  // Add other fields as necessary
}

interface ProfileResponse {
  data: ProfileData;
}

const formattedContent = ref<string>("");
const htmlContent = ref<string>("");

import { useRuntimeConfig } from "#app";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

const props = defineProps<{
  profileId: string;
}>();

const profile = ref<ProfileResponse | null>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentProfile = ref<string | null>(null);

const jobData = reactive({
  job_description: "",
  links: "",
});

const formattedJobDescription = ref<string>("");

const joburl = async () => {
  if (profile.value) {
    window.location.href = profile.value.data.links;
  }
};

const companyurl = async () => {
  if (profile.value) {
    window.location.href = profile.value.data.company_url;
  }
};

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
    const response = await axios.get<ProfileResponse>(
      `${baseURL}adminapp/jobs/get_job_detail?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile.value = response.data;
    htmlContent.value = response.data.data.job_description; // Adjust according to your data structure
    // formattedContent.value = DOMPurify.sanitize(htmlContent, { RETURN_DOM_FRAGMENT: true }).textContent.trim();
    // console.log(formattedContent)
  } catch (err) {
    error.value = "Error fetching profile data.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const showJobDetail = (profileId: string) => {
  currentProfile.value = profileId;
};

const showProfiles = () => {
  currentProfile.value = null;
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
