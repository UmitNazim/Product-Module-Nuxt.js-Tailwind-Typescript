<template>
  <aside>
    <organism-card :title="$t('sorting.name')" color="bg-white" shadow>
      <atom-radio
        v-for="(field, index) in sortingFields"
        :key="`sorting-item-${index}`"
        :label="$t(`sorting.type.${field.label}`)"
        :checked="field.checked"
        name="sorting-types"
        class="mb-2"
        @on-change="sortProductBy(field)"
      />
    </organism-card>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SortingContent',
  methods: {
    async sortProductBy({ sort }: { sort: string }) {
      this.$emit('on-sorting-start', true);
      await this.$store
        .dispatch('product/fetchProducts', { sort })
        .then(() => this.$emit('on-sorting-start', false));
    },
  },
  computed: {
    sortingFields() {
      return [
        { label: 'newToOld', sort: 'asc', checked: true },
        { label: 'oldToNew', sort: 'desc' },
      ];
    },
  },
});
</script>
