<template>
  <section v-if="interests.length > 0" part="interests">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul :class="$style.stack">
      <li v-for="(interest, index) in interests" :key="index" itemprop="interest" :class="$style.interestItem">
        <Important1>
          {{ interest.name }}
        </Important1>
        <Important3 v-if="interest.keywords && interest.keywords.length > 0" :class="$style.keywords">
          (
          <span v-for="(keyword, idx) in limitedKeywords(interest.keywords)" :key="idx">
            {{ keyword }}<span v-if="idx < limitedKeywords(interest.keywords).length - 1">,</span>
          </span>
          <span v-if="interest.keywords.length > 4">...</span>)
        </Important3>
        <span v-if="index < interests.length - 1">,</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important3 from '../Tokens/Components/Important3.vue';

interface Interest {
  name: string;
  keywords?: string[];
}

export default defineComponent({
  name: 'Interests',
  components: {
    Subtitle,
    Important1,
    Important3,
  },
  props: {
    interests: {
      type: Array as () => Interest[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Interests'
    }
  },
  methods: {
    limitedKeywords(keywords: string[]) {
      return keywords.slice(0, 4);
    }
  }
});
</script>

<style module>
ul.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 0;
  list-style-type: none;
}

.interestItem {
  display: flex;
  align-items: center;
  gap: 5px;
}

.keywords {
  display: inline;
}
</style>
