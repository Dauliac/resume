<template>
  <section class="typography-font--body-text" v-if="education.length > 0" part="education">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <dl class="layout-grid--education">
      <div v-for="(edu, index) in education" :key="index" itemprop="education" class="typography-text-align--left">
        <dt>
          <Link :href="edu.url">
            <Important1>
              {{ edu.studyType }} - {{ edu.institution }}
            </Important1>
          </Link>
        </dt>
        <dd class="layout-flex--area-date">
          <span class="typography-text--area">
            {{ edu.area }}
          </span>
          <span>
            <DateInterval :startDate="edu.startDate" :endDate="edu.endDate" />
          </span>
        </dd>
        <dd>
          <ul v-if="edu.courses && edu.courses.length > 0" class="spacing-padding-left--list spacing-margin-none">
            <li v-for="(course, idx) in edu.courses" :key="idx" class="list-style--disc typography-text-align--left">
              <Important3>
                {{ course }}
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
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important3 from '../Tokens/Components/Important3.vue';
import Link from '../Tokens/Components/Link.vue';
import DateInterval from '../Tokens/Components/DateInterval.vue';

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  courses?: string[];
}

export default defineComponent({
  name: 'Education',
  components: {
    Subtitle,
    Important1,
    Important3,
    Link,
    DateInterval,
  },

  props: {
    education: {
      type: Array as () => Education[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Education'
    }
  },
});
</script>

<style scoped>
.layout-grid--education {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.layout-flex--area-date {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.typography-text-align--left {
  text-align: left;
}

.spacing-padding-left--list {
  padding-left: 20px;
}

.spacing-margin-none {
  margin: 0;
}

.list-style--disc {
  list-style: disc;
}
</style>
