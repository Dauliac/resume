<template>
  <section v-if="publications.length > 0" part="publications">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul class="publication-list">
      <li v-for="(publication, index) in publications" :key="index" itemprop="publication">
        <h4>
          <Link :href="publication.url">
            <Important1>
              {{ publication.name }}
            </Important1>
          </Link>
        </h4>
        <p v-if="publication.publisher">
          <strong>Publisher:</strong> <Important2>{{ publication.publisher }}</Important2>
        </p>
        <p v-if="publication.releaseDate">
          <strong>Release Date:</strong> <Important2>{{ formatDate(publication.releaseDate) }}</Important2>
        </p>
        <p v-if="publication.summary">{{ publication.summary }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important2 from '../Tokens/Components/Important2.vue';
import Link from '../Tokens/Components/Link.vue';
import { formatDate } from '../../services/date';

interface Publication {
  name: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

export default defineComponent({
  name: 'Publications',
  components: {
    Subtitle,
    Important1,
    Important2,
    Link
  },
  props: {
    publications: {
      type: Array as () => Publication[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Publications'
    }
  },
  methods: {
    formatDate(date: string) {
      return formatDate(date);
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
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
}
</style>
