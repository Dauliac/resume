<template>
  <section v-if="languages.length > 0" :class="$style.languages" part="languages">
    <h3 part="section-title">
      <Subtitle>
        {{ title }}
      </Subtitle>
    </h3>
    <ul :class="$style.stack">
      <!-- Boucle sur les langues à afficher -->
      <li v-for="(language, index) in displayedLanguages" :key="index" itemprop="language" :class="$style.languageItem">
        <Important1>
          {{ language.language }}
        </Important1>
        <span class="meta">
          <Important3>
            ({{ language.fluency }})
          </Important3>
        </span>
        <!-- Ajoute une virgule après chaque langue sauf la dernière -->
        <span v-if="index < displayedLanguages.length - 1">,</span>
      </li>
      <!-- Ajoute "+X" si plus de 4 langues avec une virgule avant -->
      <li v-if="languages.length > 4" :class="$style.languageItem">
        <span>,</span>
        <Important1>+{{ languages.length - 4 }}</Important1>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Subtitle from '../Tokens/Components/Subtitle.vue';
import Important1 from '../Tokens/Components/Important1.vue';
import Important3 from '../Tokens/Components/Important3.vue';

interface Language {
  language: string;
  fluency: string;
}

export default defineComponent({
  name: 'Languages',
  components: {
    Subtitle,
    Important1,
    Important3,
  },
  props: {
    languages: {
      type: Array as () => Language[],
      default: () => []
    },
    title: {
      type: String,
      default: 'Languages'
    }
  },
  setup(props) {
    // Limite les langues affichées à 4
    const displayedLanguages = computed(() => props.languages.slice(0, 4));

    return {
      displayedLanguages
    };
  }
});
</script>

<style module>
.languages {
  margin: 20px 0;
}

.stack {
  display: flex;
  flex-wrap: wrap; /* Permet de passer à la ligne si nécessaire */
  gap: 10px; /* Espacement entre les langues */
  padding-left: 0;
  list-style-type: none;
}

.languageItem {
  display: flex;
  align-items: center; /* Alignement des éléments sur la même ligne */
  gap: 5px; /* Espacement entre la langue et la fluency */
}

.meta {
  color: grey;
}
</style>
