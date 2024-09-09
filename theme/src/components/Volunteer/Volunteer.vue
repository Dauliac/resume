<template>
  <section v-if="volunteer.length > 0" part="volunteer">
    <h3 part="section-title">
      <Subtitle>
      {{ title }}
      </Subtitle>
    </h3>
    <dl class="stack">
      <div v-for="(volunteerItem, index) in volunteer" :key="index" itemprop="volunteer">
        <dt>
          <Link href="{{ volunteerItem.url }}"> <!-- BUG: fix url integration -->
            <Important1>
              {{ volunteerItem.position }} - {{ volunteerItem.organization }}
            </Important1>
          </Link>
        </dt>
        <dd class="meta">
          <span>
            <DateInterval :startDate="volunteerItem.startDate" :endDate="volunteerItem.endDate" />
          </span>
        </dd>
        <dd v-if="volunteerItem.summary" v-html="volunteerItem.summary"></dd>
      </div>
    </dl>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important2 from '../Tokens/Components/Important2.vue';
import Important3 from '../Tokens/Components/Important3.vue';
import Link from '../Tokens/Components/Link.vue';
import DateInterval from '../Tokens/Components/DateInterval.vue';

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

export default defineComponent({
  name: 'Volunteer',
  components: {
    Subtitle,
    Important1,
    Important2,
    Important3,
    Link,
    DateInterval,
  },
  props: {
    volunteer: {
      type: Array as () => Volunteer[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Volunteer Experience'
    }
  },
  methods: {
    formatDate(date: string) {
      return new Date(dateString).toLocaleDateString('en', {
          month: 'short',
          year: 'numeric',
          timeZone: 'UTC',
      });
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

.stack > div {
  margin-bottom: 20px;
}
</style>
