<template>
  <h3>Colors</h3>
  <div class="colors-container">
    <div v-for="color in colors" :key="color.name" class="color-item">
      <div :style="{ backgroundColor: color.value }" class="color-swatch"></div>
      <div class="color-info">
        <span class="color-name">{{ color.name }}</span>
        <span class="color-value">{{ color.value }}</span>
      </div>
    </div>
  </div>
  <h3>Typography</h3>
  <div class="typography-section">
    <h4>Fonts</h4>
    <div class="typography-container">
      <div v-for="font in fonts" :key="font.name" class="typography-item">
        <div :style="{ fontFamily: font.value }" class="typography">
          <div class="typography-sample">
            <span>{{ font.name }} </span>
          </div>
          <div class="typography-info">
            <span class="typography-name">{{ font.name }}</span>
            <span class="typography-value">{{ font.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="typography-section">
    <h4>Weights</h4>
    <div class="typography-container">
      <div v-for="weight in weights" :key="weight.name" class="typography-item">
        <div :style="{ fontWeight: weight.value }" class="typography">
          <div class="typography-sample">
            <span>{{ weight.name }} </span>
          </div>
          <div class="typography-info">
            <span class="typography-name">{{ weight.name }}</span>
            <span class="typography-value">{{ weight.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="typography-section">
    <h4>Sizes</h4>
    <div class="typography-container">
      <div v-for="size in sizes" :key="size.name" class="typography-item">
        <div :style="{ fontSize: size.value }" class="typography">
          <div class="typography-sample">
            <span>{{ size.name }} </span>
          </div>
          <div class="typography-info">
            <span class="typography-name">{{ size.name }}</span>
            <span class="typography-value">{{ size.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="typography-section">
    <h4>Line Heights</h4>
    <div class="typography-container">
      <div v-for="height in heights" :key="height.name" class="typography-item">
        <div :style="{ lineHeight: height.value }" class="typography">
          <div class="typography-sample">
            <span>{{ height.name }} </span>
          </div>
          <div class="typography-info">
            <span class="typography-name">{{ height.name }}</span>
            <span class="typography-value">{{ height.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="typography-section">
    <h4>Letter Spacings</h4>
    <div class="typography-container">
      <div v-for="spacing in spacings" :key="spacing.name" class="typography-item">
        <div :style="{ letterSpacing: spacing.value }" class="typography">
          <div class="typography-sample">
            <span>{{ spacing.name }} </span>
          </div>
          <div class="typography-info">
            <span class="typography-name">{{ spacing.name }}</span>
            <span class="typography-value">{{ spacing.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { system } from './System';
import { computed } from 'vue';

const fonts = computed(() => {
  return Object.entries(system.fonts).map(([_, font]) => ({
    name: font.name,
    value: font.value,
  }));
});
const weights = computed(() => {
  return Object.entries(system.fontWeights).map(([_, weight]) => ({
    name: weight.name,
    value: weight.value,
  }));
});
const sizes = computed(() => {
  return Object.entries(system.fontSizes).map(([_, size]) => ({
    name: size.name,
    value: size.value,
  }));
});
const heights = computed(() => {
  return Object.entries(system.lineHeights).map(([_, height]) => ({
    name: height.name,
    value: height.value,
  }));
});
const spacings = computed(() => {
  return Object.entries(system.fontSpacings).map(([_, spacing]) => ({
    name: spacing.name,
    value: spacing.value,
  }));
});
const colors = computed(() => {
  return Object.entries(system.colors).map(([_, color]) => ({
    name: color.name,
    value: color.value,
  }));
});
</script>

<style scoped>
.colors-container,
.typography-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.color-item,
.typography-item {
  text-align: center;
  width: auto;
}

.color-swatch,
.typography-sample {
  width: auto;
  height: 100px;
  margin-bottom: 10px;
}

.color-info,
.typography-info {
  font-size: 14px;
}

.color-name,
.typography-name {
  display: block;
  font-weight: bold;
}

.color-value,
.typography-value {
  color: #666;
}

.typography-section {
  margin-bottom: 20px;
}

.typography {
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
