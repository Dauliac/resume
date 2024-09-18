<template>
  <a :href="href" :class="$style.token">
    <slot></slot>
  </a>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.link);
const props = defineProps(['href']);
</script>

<style module>
.token {
  text-decoration: none;
  font-family: v-bind('token.font.value');
  font-size: v-bind('token.fontSize.value');
  font-weight: v-bind('token.fontWeight.value');
  line-height: v-bind('token.lineHeight.value');
  letter-spacing: v-bind('token.letterSpacing.value');
  color: v-bind('token.color.value');
}
</style>
