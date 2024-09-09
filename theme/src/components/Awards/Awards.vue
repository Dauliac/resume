<template>
  <section v-if="awards.length > 0" part="awards">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <dl class="stack">
      <div v-for="(award, index) in awards" :key="index" itemprop="award">
        <dt>
          <Important1>
            {{ award.title }}
          </Important1>
        </dt>
        <dd class="meta">
          <div v-if="award.awarder">
            <Important2>
            {{ award.awarder }}
            </Important2>
          </div>
          <Date :date="award.date" />
        </dd>
        <dd v-if="award.summary" v-html="award.summary"></dd>
      </div>
    </dl>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatDate } from '../../services/date';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important2 from '../Tokens/Components/Important2.vue';
import Date from '../Tokens/Components/Date.vue';

interface Award {
  title: string;
  awarder?: string;
  date?: string;
  summary?: string;
}

export default defineComponent({
  name: 'Awards',
  tags: ['autodocs'],
  components: {
    Subtitle,
    Important1,
    Important2,
    Date,
  },
  props: {
    awards: {
      type: Array as () => Award[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Awards'
    }
  },
  methods: {
    formatDate(date: string) {
      return formatDate(date);
    }
  },
});
</script>

<style scoped>
</style>
