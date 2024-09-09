<template>
  <section v-if="work.length > 0" part="work">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <dl class="stack">
      <div v-for="(job, index) in work" :key="index" itemprop="work">
        <dt>
          <Link href="job.url">
            <Important1>
              {{ job.position }} - {{ job.name }}
            </Important1>
          </Link>
        </dt>
        <dd class="meta">
          <span>
            <DateInterval :startDate="job.startDate" :endDate="job.endDate" />
          </span>
        </dd>
        <dd>
          {{ job.summary }}
          <ul v-if="job.highlights && job.highlights.length > 0">
            <li v-for="(highlight, idx) in job.highlights" :key="idx">
              <Important3>
                {{ highlight }}
              </Important3>
            </li>
          </ul>
        </dd>
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
import Important3 from '../Tokens/Components/Important3.vue';
import Link from '../Tokens/Components/Link.vue';
import DateInterval from '../Tokens/Components/DateInterval.vue';

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
}

export default defineComponent({
  name: 'Work',
  components: {
    Subtitle,
    Important1,
    Important2,
    Important3,
    Link,
    DateInterval,
  },

  props: {
    work: {
      type: Array as () => Work[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Work Experience'
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
dl {
  display: flex;
  flex-direction: column;
}

.meta {
  color: grey;
}

ul {
  margin: 0;
  padding-left: 20px;
}

li {
  list-style: disc;
}
</style>
