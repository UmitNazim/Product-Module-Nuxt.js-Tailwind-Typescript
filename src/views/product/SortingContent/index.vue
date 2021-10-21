<template>
  <organism-card title="sorting.name" color="bg-white" shadow>
    <atom-radio
      v-for="(field, index) in fields"
      :key="`sorting-item-${index}`"
      :label="$t(`sorting.type.${field.label}`)"
      name="sorting-types"
      @on-change="selectedSort = field"
      class="mb-2"
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
  computed: {
    fields() {
      return [
        { label: 'highPriceToLow', _sort: 'price', _order: 'desc' },
        { label: 'lowPriceToHigh', _sort: 'price', _order: 'asc' },
        { label: 'newToOld', _sort: 'added', _order: 'asc' },
        { label: 'oldToNew', _sort: 'added', _order: 'desc' },
      ];
    },
  },
};
</script>
