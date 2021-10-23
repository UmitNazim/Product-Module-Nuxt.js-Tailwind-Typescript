<template>
  <aside>
    <organism-card :title="$t('category.list')" color="bg-white" shadow>
      <template v-if="isCategory">
        <molecule-content-loader
          v-for="n in 4"
          :key="`category-placeholder-${n}`"
          type="category"
          class="mb-2"
        />
      </template>
      <template v-else>
        <atom-checkbox
          v-for="(category, index) in categories"
          :key="`sorting-item-${index}`"
          :label="category"
          @input="status => getProductBy(status, category)"
          class="mb-2 capitalize"
        />
      </template>
    </organism-card>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      isCategory: false,
    };
  },
  methods: {
    getProductBy(status = false, category = null) {
      this.isCategory = true;
      status
        ? this.selected.push(category)
        : (this.selected = this.selected.filter(item => item !== category));

      this.$store.dispatch('product/updateSelectedCategories', {
        items: [...this.selected],
      });
      this.isCategory = false;
    },
  },
  computed: {
    categories() {
      return this.$store.getters['product/getCategories'];
    },
  },
  async created() {
    this.isCategory = true;
    await this.$store.dispatch('product/fetchCategories');
    this.isCategory = false;
  },
};
</script>
