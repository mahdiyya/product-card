<script>
import { defineComponent } from 'vue';
import ProductCard from '@/product-card.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    ProductCard
  }
});
</script>

<template>
  <div id="app">
    <product-card />
  </div>
</template>
