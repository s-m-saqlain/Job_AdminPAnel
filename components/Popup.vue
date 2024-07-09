<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-gray-800 bg-opacity-75 overflow-y-auto h-full py-12"
  >
    <div class="rounded-lg flex justify-end mr-12 mt-8">
      <button @click="hidePopup" class="">
        <svg
          class="w-6 h-6 text-white border rounded-full font-bold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-[800px] mx-auto">
        <div>
          <label for="jobTitle" class="block text-sm font-medium text-white"
            >Job Title</label
          >
          <input
            v-model="form.job_title"
            type="text"
            id="jobTitle"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.job_title" class="text-red-500 text-sm mt-1">
            {{ errors.job_title }}
          </p>
        </div>

        <div>
          <label for="companyName" class="block text-sm font-medium text-white"
            >Company Name</label
          >
          <input
            v-model="form.company_name"
            type="text"
            id="companyName"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.company_name" class="text-red-500 text-sm mt-1">
            {{ errors.company_name }}
          </p>
        </div>

        <div>
          <label
            for="companyLocation"
            class="block text-sm font-medium text-white"
            >Company Location</label
          >
          <input
            v-model="form.company_location"
            type="text"
            id="companyLocation"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.company_location" class="text-red-500 text-sm mt-1">
            {{ errors.company_location }}
          </p>
        </div>

        <div>
          <label for="companyUrl" class="block text-sm font-medium text-white"
            >Company URL</label
          >
          <input
            v-model="form.company_url"
            type="url"
            id="companyUrl"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.company_url" class="text-red-500 text-sm mt-1">
            {{ errors.company_url }}
          </p>
        </div>

        <div>
          <label for="jobUrl" class="block text-sm font-medium text-white"
            >Job URL</label
          >
          <input
            v-model="form.job_url"
            type="url"
            id="jobUrl"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.job_url" class="text-red-500 text-sm mt-1">
            {{ errors.job_url }}
          </p>
        </div>

        <div>
          <label for="jobFunction" class="block text-sm font-medium text-white"
            >Job Function</label
          >
          <input
            v-model="form.job_function"
            type="text"
            id="jobFunction"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.job_function" class="text-red-500 text-sm mt-1">
            {{ errors.job_function }}
          </p>
        </div>

        <div>
          <label for="industry" class="block text-sm font-medium text-white"
            >Industries</label
          >
          <input
            v-model="form.industries"
            type="text"
            id="industry"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.industries" class="text-red-500 text-sm mt-1">
            {{ errors.industries }}
          </p>
        </div>

        <div>
          <label for="salary" class="block text-sm font-medium text-white"
            >Salary</label
          >
          <input
            v-model="form.salary"
            type="number"
            id="salary"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="errors.salary" class="text-red-500 text-sm mt-1">
            {{ errors.salary }}
          </p>
        </div>

        <div>
          <label for="employeeType" class="block text-sm font-medium text-white"
            >Employee Type</label
          >
          <select
            v-model="form.employment_type"
            id="employeeType"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Employee Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
          <p v-if="errors.employment_type" class="text-red-500 text-sm mt-1">
            {{ errors.employment_type }}
          </p>
        </div>

        <div>
          <label
            for="seniorityLevel"
            class="block text-sm font-medium text-white"
            >Seniority Level</label
          >
          <select
            v-model="form.seniority_level"
            id="seniorityLevel"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Seniority Level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
          <p v-if="errors.seniority_level" class="text-red-500 text-sm mt-1">
            {{ errors.seniority_level }}
          </p>
        </div>

        <div>
          <label
            for="listingPlatform"
            class="block text-sm font-medium text-white"
            >Listing Platform</label
          >
          <select
            v-model="form.listing_platform"
            id="listingPlatform"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Listing Platform</option>
            <option value="linkedin">LinkedIn</option>
            <option value="indeed">Indeed</option>
            <option value="glassdoor">Glassdoor</option>
          </select>
          <p v-if="errors.listing_platform" class="text-red-500 text-sm mt-1">
            {{ errors.listing_platform }}
          </p>
        </div>

        <div>
          <label for="city" class="block text-sm font-medium text-white"
            >City</label
          >
          <select
            v-model="form.city"
            id="city"
            class="mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select City</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
          <p v-if="errors.city" class="text-red-500 text-sm mt-1">
            {{ errors.city }}
          </p>
        </div>
        <div class="mt-2">
          <div v-if="editor" class="text-white w-64">
            <button
              @click="editor.chain().focus().toggleBold().run()"
              :disabled="!editor.can().chain().focus().toggleBold().run()"
              :class="{ 'is-active': editor.isActive('bold') }"
            >
              bold
            </button>
            <button
              @click="editor.chain().focus().toggleItalic().run()"
              :disabled="!editor.can().chain().focus().toggleItalic().run()"
              :class="{ 'is-active': editor.isActive('italic') }"
            >
              italic
            </button>
            <button
              @click="editor.chain().focus().toggleStrike().run()"
              :disabled="!editor.can().chain().focus().toggleStrike().run()"
              :class="{ 'is-active': editor.isActive('strike') }"
            >
              strike
            </button>
            <button
              @click="editor.chain().focus().toggleCode().run()"
              :disabled="!editor.can().chain().focus().toggleCode().run()"
              :class="{ 'is-active': editor.isActive('code') }"
            >
              code
            </button>
            <button @click="editor.chain().focus().unsetAllMarks().run()">
              clear marks
            </button>
            <button @click="editor.chain().focus().clearNodes().run()">
              clear nodes
            </button>
            <button
              @click="editor.chain().focus().setParagraph().run()"
              :class="{ 'is-active': editor.isActive('paragraph') }"
            >
              paragraph
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
            >
              h1
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
            >
              h2
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
            >
              h3
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
            >
              h4
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
            >
              h5
            </button>
            <button
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
            >
              h6
            </button>
            <button
              @click="editor.chain().focus().toggleBulletList().run()"
              :class="{ 'is-active': editor.isActive('bulletList') }"
            >
              bullet list
            </button>
            <button
              @click="editor.chain().focus().toggleOrderedList().run()"
              :class="{ 'is-active': editor.isActive('orderedList') }"
            >
              ordered list
            </button>
            <button
              @click="editor.chain().focus().toggleCodeBlock().run()"
              :class="{ 'is-active': editor.isActive('codeBlock') }"
            >
              code block
            </button>
            <button
              @click="editor.chain().focus().toggleBlockquote().run()"
              :class="{ 'is-active': editor.isActive('blockquote') }"
            >
              blockquote
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
              horizontal rule
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()">
              hard break
            </button>
            <button
              @click="editor.chain().focus().undo().run()"
              :disabled="!editor.can().chain().focus().undo().run()"
            >
              undo
            </button>
            <button
              @click="editor.chain().focus().redo().run()"
              :disabled="!editor.can().chain().focus().redo().run()"
            >
              redo
            </button>
          </div>
        </div>
        <div v-if="editor" class="text-black w-full bg-white mx-auto">
          <TiptapEditorContent :editor="editor" />
        </div>

        <div>
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { defineProps, defineEmits } from "vue";

const form = ref({
  job_title: "",
  company_name: "",
  company_location: "",
  company_url: "",
  job_url: "",
  job_function: "",
  industries: "",
  salary: "",
  employment_type: "",
  seniority_level: "",
  listing_platform: "",
  city: "",
  job_description: "",
});

const forms = ref({ ...form });

const errors = ref({});

const validateForm = () => {
  errors.value = {};

  for (const key in form.value) {
    if (!form.value[key]) {
      errors.value[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
    }
  }

  return Object.keys(errors.value).length === 0;
};

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["hide"]);

const hidePopup = () => {
  emit("hide");
};

const usePostJob = async (formData) => {
  const isLoading = ref(false);
  const error = ref(null);

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://kuber123.pythonanywhere.com/adminapp/jobs/add_job/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to post job");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const handleSubmit = async () => {
  if (validateForm()) {
    form.value.job_description = editor.getHTML();
    const response = await usePostJob(form.value);

    if (response) {
      console.log("Form submitted successfully:", response);
      hidePopup();
    }

    // Clear form fields
    for (const key in form.value) {
      form.value[key] = "";
    }

    // Clear editor content
    editor.chain().setContent("").run();
  }
};

const addToEditor = (html) => {
  if (editor) {
    editor.chain().focus().insertContent(html).run();
  }
};

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});

onBeforeUnmount(() => {
  editor.destroy();
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
