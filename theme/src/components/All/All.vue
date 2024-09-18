<template>
  <div class="body">
    <header class="all__name">
      <h1>
        <Title>{{ basics.label }}</Title>
      </h1>
      <mark v-if="basics">
          <aside v-if="basics" class="all__datasheet">
            <div class="all__image">
              <div v-if="basics.image" class="all__image-wrapper">
                <img :src="basics.image" :alt="basics.label" />
              </div>
            </div>
            <div v-if="basics.location" class="all__location">
              <p>{{ basics.location.city }}, {{ basics.location.countryCode }}</p>
            </div>
            <div class="all__contact">
              <div>
                <Link :href="'mailto:' + basics.email">{{ basics.email }}</Link>
              </div>
              <div>
                <Link :href="'tel:' + basics.phone">{{ basics.phone }}</Link>
              </div>
            </div>
            <div class="all__social">
              <SocialMedia :profiles="basics.profiles" />
            </div>
          </aside>
          <p class="all__summary" >&nbsp;{{ basics.summary }}</p>
        </mark>
    </header>
    <main class="all__body">
        <section class="all__section">
          <Skills :skills="skills" title="Skills" />
        </section>
        <section class="all__section">
          <Education :education="education" title="Education" />
        </section>
        <section class="all__section">
          <Projects :projects="projects" title="Projects" />
        </section>
        <section class="all__section">
          <Awards :awards="awards" title="Awards" />
        </section>
        <section class="all__section">
          <Publications :publications="publications" title="Publications" />
        </section>
        <section class="all__section">
          <Languages :languages="languages" title="Languages" />
        </section>
        <section class="all__section">
          <Interests :interests="interests" title="Interests" />
        </section>
        <section class="all__section">
          <References :references="references" title="References" />
        </section>
      <!-- </section> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialMedia from '../SocialMedia/SocialMedia.vue';
import Title from '../Tokens/Components/Title.vue';
import Link from '../Tokens/Components/Link.vue';
import Skills from '../Skills/Skills.vue';
import Education from '../Education/Education.vue';
import Projects from '../Projects/Projects.vue';
import Awards from '../Awards/Awards.vue';
import Publications from '../Publications/Publications.vue';
import Languages from '../Languages/Languages.vue';
import Interests from '../Interests/Interests.vue';
import References from '../References/References.vue';

export default defineComponent({
  name: 'All',
  components: {
    SocialMedia,
    Title,
    Link,
    Skills,
    Education,
    Projects,
    Awards,
    Publications,
    Languages,
    Interests,
    References
  },
  props: {
    basics: {
      type: Object,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    education: {
      type: Array,
      required: true
    },
    projects: {
      type: Array,
      required: true
    },
    awards: {
      type: Array,
      required: true
    },
    publications: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    interests: {
      type: Array,
      required: true
    },
    references: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>
.body {
  height: 297mm;
  width: 210mm;
}

.all__name {
  width: 100%;
  text-align: center;
}

.all__datasheet {
  float: left;
  padding: 0 20px 0 0;
}

.all__summary {
  text-align: left;
}

.all__body {
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
}

.all__section {
  box-sizing: border-box;
  padding: 10px;
  max-width: calc(50% - 20px);
}

.all__image-wrapper img {
  width: 150px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
