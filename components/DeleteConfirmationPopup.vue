<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 class="text-lg font-semibold mb-4">
        Are you sure you want to delete?
      </h2>
      <div class="flex justify-center gap-4">
        <button
          @click="confirmDelete"
          class="bg-red-500 text-white px-4 py-2 rounded-md font-bold"
        >
          Yes
        </button>
        <button
          @click="close"
          class="bg-gray-500 text-white px-4 py-2 rounded-md font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ visible: boolean; profile: Profile }>();
const emit = defineEmits(["close", "confirm"]);

const close = () => {
  emit("close");
};

const confirmDelete = () => {
  emit("confirm", props.profile);
  close();
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
