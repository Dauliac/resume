<template>
  <a :href="href" :style="{
    fontFamily: token.font.value,
    fontSize: token.fontSize.value,
    fontWeight: token.fontWeight.value,
    lineHeight: token.lineHeight.value,
    letterSpacing: token.letterSpacing.value,
    color: token.color.value,
  }" class="link">
    <slot></slot>
  </a>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.link);
const props = defineProps(['href']);
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
}
</style>
