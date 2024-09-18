<template>
  <article v-if="sections.length > 0" part="resume-article">
    <h2 part="article-title">
      <Title>
        {{ title }}
      </Title>
    </h2>
    <div class="section" v-for="(section, index) in sections" :key="index">
      <h3 part="section-title">
        <Subtitle>
          {{ section.title }}
        </Subtitle>
      </h3>
      <p v-if="section.content">{{ section.content }}</p>
      <ul v-if="section.items && section.items.length > 0">
        <li v-for="(item, idx) in section.items" :key="idx">
          <Important1>
            {{ item }}
          </Important1>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '../Tokens/Components/Title.vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';

interface Section {
  title: string;
  content?: string;
  items?: string[];
}

export default defineComponent({
  name: 'ResumeArticle',
  components: {
    Title,
    Subtitle,
    Important1,
  },
  props: {
    sections: {
      type: Array as () => Section[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Resume'
    }
  }
});
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}

ul {
  padding-left: 0;
  list-style-type: none;
}

li {
  margin-bottom: 10px;
}
</style>
