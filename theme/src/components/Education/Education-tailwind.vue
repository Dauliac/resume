<template>
  <section v-if="education.length > 0" class="prose" part="education">
    <h3 part="section-title">
      <Subtitle>{{ title }}</Subtitle>
    </h3>
    <dl class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="(edu, index) in education" :key="index" itemprop="education" class="text-left">
        <dt>
          <Link :href="edu.url">
            <Important1>{{ edu.studyType }} - {{ edu.institution }}</Important1>
          </Link>
        </dt>
        <dd class="flex items-center space-x-4">
          <span>{{ edu.area }}</span>
          <span><DateInterval :startDate="edu.startDate" :endDate="edu.endDate" /></span>
        </dd>
        <dd v-if="edu.courses && edu.courses.length > 0">
          <ul class="pl-5 list-disc">
            <li v-for="(course, idx) in edu.courses" :key="idx">
              <Important3>{{ course }}</Important3>
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
</style>
