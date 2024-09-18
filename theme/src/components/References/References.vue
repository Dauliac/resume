<template>
  <section v-if="references.length > 0" part="references">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul class="reference-list">
      <li v-for="(reference, index) in references" :key="index" itemprop="reference">
        <p>
          <Important1>
            {{ reference.name }} - {{ reference.position }}
          </Important1>
        </p>
        <p v-if="reference.organization">
          <strong>Organization:</strong> <Important2>{{ reference.organization }}</Important2>
        </p>
        <p v-if="reference.phone">
          <strong>Phone:</strong> <Important2>{{ reference.phone }}</Important2>
        </p>
        <p v-if="reference.email">
          <strong>Email:</strong> <Important2>{{ reference.email }}</Important2>
        </p>
        <p v-if="reference.summary">{{ reference.summary }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important2 from '../Tokens/Components/Important2.vue';

interface Reference {
  name: string;
  position: string;
  organization?: string;
  phone?: string;
  email?: string;
  summary?: string;
}

export default defineComponent({
  name: 'References',
  components: {
    Subtitle,
    Important1,
    Important2
  },
  props: {
    references: {
      type: Array as () => Reference[],
      default: () => []
    },
    title: {
      type: String,
      default: 'References'
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
