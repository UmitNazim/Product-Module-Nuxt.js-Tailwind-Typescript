<template>
  <organism-card title="category.list" color="bg-white" shadow>
    <atom-checkbox
      v-for="(field, index) in fields"
      :key="`sorting-item-${index}`"
      :label="field"
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
      return ['electronics', 'jewelery', "men's clothing", "women's clothing"];
    },
  },
};
</script>
