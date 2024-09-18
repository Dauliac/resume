<template>
  <section v-if="projects.length > 0" part="projects">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul class="project__list">
      <li class="project__item" v-for="(project, index) in projects" :key="index" itemprop="project">
        <dl>
          <dt class="project__name">
            <Link :href="project.url">
              <Important1>
                {{ project.name }}
              </Important1>
            </Link>
          </dt>
          <dd class="project__description">
            <p>{{ project.description }}</p>
            <dl>
              <dt v-if="project.highlights && project.highlights.length > 0" class="project__highlights-title">
                Highlights:
              </dt>
              <dd v-if="project.highlights && project.highlights.length > 0" class="project__highlights">
                <ul>
                  <li v-for="(highlight, idx) in project.highlights" :key="idx">
                    <Important3>{{ highlight }}</Important3>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt v-if="project.keywords && project.keywords.length > 0" class="project__keywords-title">
                <Important2>Keywords:</Important2>
              </dt>
              <dd v-if="project.keywords && project.keywords.length > 0" class="project__keywords">
                <ul class="project__sublist">
                  <li v-for="(keyword, idx) in project.keywords" :key="idx" class="project__sublist-item">
                    {{ keyword }}
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt v-if="project.roles && project.roles.length > 0" class="project__roles-title">
                <Important2>Roles:</Important2>
              </dt>
              <dd v-if="project.roles && project.roles.length > 0" class="project__roles">
                <ul class="project__sublist">
                  <li v-for="(role, idx) in project.roles" :key="idx" class="project__sublist-item">
                    {{ role }}
                  </li>
                </ul>
              </dd>
            </dl>
          </dd>
        </dl>
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
import Link from '../Tokens/Components/Link.vue';

interface Project {
  name: string;
  description: string;
  url: string;
  highlights?: string[];
  keywords?: string[];
  roles?: string[];
}

export default defineComponent({
  name: 'Projects',
  components: {
    Subtitle,
    Important1,
    Important2,
    Important3,
    Link,
  },
  props: {
    projects: {
      type: Array as () => Project[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Projects'
    }
  }
});
</script>

<style scoped>
.project__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project__item {
  margin-bottom: 10px;
  padding: 10px;
}

.project__description {
  padding: 10px;
}

.project__keywords, .project__keywords-title, .project__roles, .project__roles-title {
  display: inline;
}
.project__highlights-title, .project__keywords-title, .project__roles-title {
  padding-right: 10px;
}

.project__sublist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline;
}

.project__sublist-item {
  display: inline;
}

.project__sublist-item:last-child::after {
  content: "";
}

.project__sublist-item::after {
  content: ", ";
}

.project__sublist-item:last-child::after {
  content: "";
}
</style>
