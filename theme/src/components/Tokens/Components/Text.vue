<template>
  <p class="typography-font--body-text">
    <slot></slot>
  </p>
</template>

<script setup>
import { components } from './Components';
import { computed } from 'vue';

const token = computed(() => components.text);
</script>

<style>
:root {
  --typography-body-text-font-family: v-bind('token.font.value');
  --typography-body-text-font-size: v-bind('token.fontSize.value');
  --typography-body-text-font-weight: v-bind('token.fontWeight.value');
  --typography-body-text-line-height: v-bind('token.lineHeight.value');
  --typography-body-text-letter-spacing: v-bind('token.letterSpacing.value');
  --color-body-text: v-bind('token.color.value');
}

/* p, h1, h2, h3, h4, h5, h6, span, a, li { */
:global(.typography-font--body-text) {
  font-family: var(--typography-body-text-font-family);
  font-size: var(--typography-body-text-font-size);
  font-weight: var(--typography-body-text-font-weight);
  line-height: var(--typography-body-text-line-height);
  letter-spacing: var(--typography-body-text-letter-spacing);
  /* color: var(--color-body-text); */
  color:#7318f0;
}
</style>
