<template>
  <h3>Colors</h3>
    <div class="colors-container">
    <div v-for="color in colorList" :key="color.name" class="color-item">
      <div :style="{ backgroundColor: color.value }" class="color-swatch"></div>
      <div class="color-info">
        <span class="color-name">{{ color.name }}</span>
        <span class="color-value">{{ color.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { colors } from './Colors';
import { computed } from 'vue';

const colorList = computed(() => {
  return Object.entries(colors).map(([name, color]) => ({
    name: color.name,
    value: color.value,
  }));
});
</script>

<style scoped>
.colors-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.color-item {
  width: auto;
  text-align: center;
}
.color-swatch {
  width: auto;
  height: 100px;
  margin-bottom: 10px;
}
.color-info {
  font-size: 14px;
}
.color-name {
  display: block;
  font-weight: bold;
}
.color-value {
  color: #666;
}
</style>
