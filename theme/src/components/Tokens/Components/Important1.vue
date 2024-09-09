<template>
  <div :style="{
      fontFamily: token.font.value,
      fontSize: token.fontSize.value,
      fontWeight: token.fontWeight.value,
      lineHeight: token.lineHeight.value,
      letterSpacing: token.letterSpacing.value,
      color: token.color.value,
    }" class="important1">
    <slot></slot>
  </div>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.important1);
</script>

<style scoped>
.important1 {
  margin: 10px 0;
}
</style>
