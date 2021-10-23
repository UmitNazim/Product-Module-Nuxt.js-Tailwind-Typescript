<template>
  <div>
    <template v-if="type == 'product'">
      <content-loader
        class="molecule-content-loader__product"
        :width="272"
        :height="314"
        :speed="1"
        primaryColor="#f8f7f7"
        secondaryColor="#ecebeb"
      >
        <circle cx="582" cy="386" r="8" />
        <rect x="304" y="275" rx="5" ry="5" width="220" height="10" />
        <circle cx="571" cy="379" r="8" />
        <rect x="457" y="366" rx="5" ry="5" width="220" height="10" />
        <circle cx="504" cy="267" r="8" />
        <rect x="440" y="393" rx="5" ry="5" width="220" height="10" />
        <circle cx="478" cy="355" r="8" />
        <rect x="453" y="392" rx="5" ry="5" width="220" height="10" />
        <rect x="109" y="261" rx="0" ry="0" width="2" height="0" />
        <rect x="117" y="295" rx="0" ry="0" width="4" height="0" />
        <rect x="0" y="3" rx="18" ry="18" width="270" height="184" />
        <rect x="4" y="282" rx="4" ry="4" width="265" height="30" />
        <rect x="1" y="205" rx="4" ry="4" width="163" height="13" />
        <rect x="1" y="233" rx="4" ry="4" width="268" height="14" />
      </content-loader>
    </template>
    <template v-if="type == 'category'">
      <content-loader
        class="molecule-content-loader__category"
        :width="232"
        :height="21"
        :speed="1"
        primaryColor="#f8f7f7"
        secondaryColor="#ecebeb"
      >
        <circle cx="582" cy="386" r="8" />
        <rect x="304" y="275" rx="5" ry="5" width="220" height="10" />
        <circle cx="571" cy="379" r="8" />
        <rect x="457" y="366" rx="5" ry="5" width="220" height="10" />
        <circle cx="504" cy="267" r="8" />
        <rect x="440" y="393" rx="5" ry="5" width="220" height="10" />
        <circle cx="478" cy="355" r="8" />
        <rect x="453" y="392" rx="5" ry="5" width="220" height="10" />
        <rect x="109" y="261" rx="0" ry="0" width="2" height="0" />
        <rect x="117" y="295" rx="0" ry="0" width="4" height="0" />
        <rect x="1" y="-1" rx="2" ry="2" width="22" height="21" />
        <rect x="36" y="0" rx="8" ry="8" width="192" height="21" />
      </content-loader>
    </template>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'MoleculeContentLoader',
  components: { ContentLoader },
  props: {
    type: {
      type: String,
      default: 'product',
      validator: val => ['product', 'category'].includes(val),
    },
  },
};
</script>
