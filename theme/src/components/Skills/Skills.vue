<template>
  <section v-if="skills.length > 0" part="skills">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul class="stack">
      <li v-for="(skill, index) in skills" :key="index" itemprop="skill">
        <Important1>
          {{ skill.name }}
        </Important1>
        <span class="meta">
          <Important2>
            ({{ skill.level }})
          </Important2>
        </span>
        <ul v-if="skill.keywords && skill.keywords.length > 0">
          <li v-for="(keyword, idx) in skill.keywords" :key="idx">
            <Important3>
              {{ keyword }}
            </Important3>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important2 from '../Tokens/Components/Important2.vue';
import Important3 from '../Tokens/Components/Important3.vue';

interface Skill {
  name: string;
  level: string;
  keywords?: string[];
}

export default defineComponent({
  name: 'Skills',
  components: {
    Subtitle,
    Important1,
    Important2,
    Important3,
  },
  props: {
    skills: {
      type: Array as () => Skill[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Skills'
    }
  }
});
</script>

<style scoped>
ul {
  padding-left: 0;
  list-style-type: none;
}

li {
  margin-bottom: 10px;
}

.stack {
  list-style-type: none;
}

ul ul {
  padding-left: 20px;
}

.meta {
  color: grey;
}
</style>
