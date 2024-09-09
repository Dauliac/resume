<template>
  <time :datetime="date">{{ formatDate(date) }}</time>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Date',
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatDate(date: string) {
      const options = { year: 'numeric', month: 'short' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
});
</script>

<style scoped>
</style>
