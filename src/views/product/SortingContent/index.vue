<template>
  <organism-card title="sorting.name" color="bg-white" shadow>
    <atom-radio
      v-for="(field, index) in fields"
      :key="`sorting-item-${index}`"
      :label="$t(`sorting.type.${field.label}`)"
      name="sorting-types"
      @on-change="sortProductBy(field)"
      class="mb-2"
      :checked="field.checked"
    />
  </organism-card>
</template>

<script>
export default {
  data() {
    return {
      selectedSort: {},
    };
  },
  methods: {
    async sortProductBy({ sort }) {
      this.$emit('on-sort', true);
      await this.$store.dispatch('product/fetchProducts', { sort });
      this.$emit('on-sort', false);
    },
  },
  computed: {
    fields() {
      return [
        { label: 'newToOld', sort: 'asc', checked: true },
        { label: 'oldToNew', sort: 'desc' },
      ];
    },
  },
};
</script>
