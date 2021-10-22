<template>
  <organism-card title="category.list" color="bg-white" shadow>
    <atom-checkbox
      v-for="(category, index) in categories"
      :key="`sorting-item-${index}`"
      :label="category"
      @input="status => getProductBy(status, category)"
      class="mb-2 capitalize"
    />
  </organism-card>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    getProductBy(status = false, category = null) {
      status
        ? this.selected.push(category)
        : (this.selected = this.selected.filter(item => item !== category));

      this.$store.dispatch('product/updateSelectedCategories', {
        items: [...this.selected],
      });
    },
  },
  computed: {
    categories() {
      return this.$store.getters['product/getCategories'];
    },
  },
  async created() {
    await this.$store.dispatch('product/fetchCategories');
  },
};
</script>
