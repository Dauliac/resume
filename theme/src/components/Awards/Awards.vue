<!-- <template> -->
<!--   <section v-if="awards.length > 0" part="awards"> -->
<!--     <h3 part="section-title">{{ title }}</h3> -->
<!--     <dl class="stack"> -->
<!--       <div v-for="(award, index) in awards" :key="index" itemprop="award"> -->
<!--         <dt>{{ award.title }}</dt> -->
<!--         <dd class="meta"> -->
<!--           <div v-if="award.awarder"><strong>{{ award.awarder }}</strong></div> -->
<!--           <span v-if="award.date">{{ formatDate(award.date) }}</span> -->
<!--         </dd> -->
<!--         <dd v-if="award.summary" v-html="award.summary"></dd> -->
<!--       </div> -->
<!--     </dl> -->
<!--   </section> -->
<!-- </template> -->
<!---->
<!-- <script lang="ts"> -->
<!-- import { defineComponent } from 'vue'; -->
<!-- import { formatDate } from '../../services/date'; -->
<!---->
<!-- interface Award { -->
<!--   title: string; -->
<!--   awarder?: string; -->
<!--   date?: string; -->
<!--   summary?: string; -->
<!-- } -->
<!---->
<!-- export default defineComponent({ -->
<!--   name: 'Awards', -->
<!--   props: { -->
<!--     awards: { -->
<!--       type: Array as () => Award[], -->
<!--       default: () => [] -->
<!--     }, -->
<!--     title: { -->
<!--       type: String, -->
<!--       default: 'Awards' -->
<!--     } -->
<!--   }, -->
<!--   methods: { -->
<!--     formatDate(date: string) { -->
<!--       return formatDate(date); -->
<!--     } -->
<!--   } -->
<!-- }); -->
<!-- </script> -->
<!---->
<!-- <style scoped> -->
<!-- </style> -->
