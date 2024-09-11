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
        <!-- <div> -->
        <!-- <div class="mt-4" v-for="item in profile" :key="item.id">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-black font-semibold text-2xl ml-8">
                  {{ item.job_title }}
                </p>
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
          </div> -->
        <!-- <div class="mt-4">
            <div>
              <p class="text-black font-semibold text-2xl ml-8">
                {{ profile.data.job_title }}
              </p>
            </div>
            <div class="mx-14">
              <div>
                {{ profile.data.industries }}
                <div>
                <button class="text-blue-500 font-bold text-4xl py-2 w-[500px] rounded-2xl ml-[5rem] mt-3">
                  {{ profile.data.view_count }}
                </button>
              </div>
              </div>
              <img
                v-if="profile.data.listing_platform === 'LinkedIn'"
                src="~/assets/images/linkedinlogo.png"
                alt="LinkedIn"
                class="w-20 h-20 inline"
              />
              <img
                v-else-if="profile.data.listing_platform === 'Indeed'"
                src="~/assets/images/indeed.jpeg"
                alt="Indeed"
                class="w-6 h-6 inline"
              />
              {{ profile.data.listing_platform }}
            </div>
          </div> -->

        <div class="flex justify-between mx-6 mt-[2rem]">
          <div>
            <div class="pb-8 w-[600px]" v-html="htmlContent"></div>
            <a
              class="mb-6 bg-teal-500 hover:bg-teal-600 text-white text-center block rounded-full py-2"
              href="https://uk.linkedin.com/company/mygwork?trk=public_jobs_topcard-org-name" target="_blank"
              >View Company</a
            >
          </div>
          <div>
            <div class="mx-14">
              <button
                class="bg-[#0694A2] text-[16px] text-white py-2 rounded-3xl px-6 ml-[5rem]"
              >
                Views: {{ profile.data.view_count }}
              </button>
              <!-- <div>
                {{ profile.data.industries }}
              </div> -->
              <div class="flex justify-center mt-12">
                <img
                  v-if="profile.data.listing_platform === 'LinkedIn'"
                  src="~/assets/images/linkedinlogo.png"
                  alt="LinkedIn"
                  class="w-44 h-44 inline"
                />
                <img
                  v-else-if="profile.data.listing_platform === 'Indeed'"
                  src="~/assets/images/indeed.jpeg"
                  alt="Indeed"
                  class="w-44 h-44 inline"
                />
              </div>
              <div class="text-center text-gray-700 font-normal pt-1">
                Seniority: {{ profile.data.listing_platform }}
              </div>
              <div class="mt-4">
                <button
                  class="bg-[#0694A2] hover:bg-[#047481] text-white rounded-3xl w-[15rem] py-2"
                >
                  Apply for this job
                </button>
              </div>
              <div class="mt-4">
                <p class="text-center text-[#64748B] font-bold">
                  Admin Feedback
                </p>
              </div>
              <div class="flex justify-center mt-3">
                <textarea
                  disabled=""
                  cols="20"
                  rows="5"
                  class="border border-black"
                >
                GOOD JOB
                </textarea>
              </div>
              <div class="flex justify-center mt-4">
                <button
                  class="bg-[#0694A2] hover:bg-[#047481] text-[15px] text-white rounded-3xl w-44 py-2"
                >
                  Add/Update feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
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
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import DOMPurify from "dompurify";
import axios from "axios";
import ProfileDetail from "./ProfileDetail.vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface ProfileData {
  id: string;
  job_description: string;
  links: string;
  company_url: string;
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
    console.log(response);
    htmlContent.value = response.data.data.job_description;
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

onMounted(() => {
  window.addEventListener("popstate", handlePopState);
});

const handlePopState = () => {
  if (currentProfile.value) {
    currentProfile.value = null;
  } else {
    router.go(-1);
  }
};

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
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
