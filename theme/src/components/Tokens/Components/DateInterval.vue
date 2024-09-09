<template>
  <span>
    <Date :date="startDate" />
    <span v-if="endDate"> - </span> <!-- TODO: add splitter instead char -->
    <Date v-if="endDate" :date="endDate" />
    <span v-else>Present</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Date from './Date.vue';

export default defineComponent({
  name: 'DateInterval',
  components: {
    Date,
  },
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      default: null,
    },
  },
});
</script>

<style scoped>
</style>
