<template>
  <span :class="$style.important3">
    <slot></slot>
  </span>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.important3);
</script>

<style module>
.important3 {
  margin: 10px 0;
  font-family: v-bind('token.font.value');
  font-size: v-bind('token.fontSize.value');
  font-weight: v-bind('token.fontWeight.value');
  line-height: v-bind('token.lineHeight.value');
  letter-spacing: v-bind('token.letterSpacing.value');
  color: v-bind('token.color.value');
}
</style>
