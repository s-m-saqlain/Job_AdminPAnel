<template>
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
</script>
