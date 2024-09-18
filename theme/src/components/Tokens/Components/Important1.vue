<template>
  <span :class="$style.important1">
    <slot></slot>
  </span>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.important1);
</script>

<style module>
.important1 {
  margin: 10px 0;
  font-family: v-bind('token.font.value');
  font-size: v-bind('token.fontSize.value');
  font-weight: v-bind('token.fontWeight.value');
  line-height: v-bind('token.lineHeight.value');
  letter-spacing: v-bind('token.letterSpacing.value');
  color: v-bind('token.color.value');
}
</style>
