<template>
  <section v-if="profiles.length > 0" part="social-media">
    <ul class="social-media-list">
      <li v-for="(profile, index) in profiles" :key="index" itemprop="profile">
        <Link :href="profile.url">
          {{ profile.network }}/{{ profile.username }}
        </Link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Link from '../Tokens/Components/Link.vue';

interface Profile {
  network: string;
  username: string;
  url: string;
}

export default defineComponent({
  name: 'SocialMedia',
  components: {
    Link
  },
  props: {
    profiles: {
      type: Array as () => Profile[],
      default: () => []
    }
  }
});
</script>

<style scoped>
.social-media-list {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}
</style>
