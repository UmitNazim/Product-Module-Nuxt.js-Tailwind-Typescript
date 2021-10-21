<template>
  <div class="place-items-center">
    <atom-button
      shadow
      class="mx-1"
      v-for="(page, index) in pages"
      :key="`organism-pagination-page-${index}`"
      :color="paginationPage === page ? 'white' : 'black'"
      :bg-color="paginationPage === page ? 'navy-blue' : 'transparent'"
      @on-click="paginationPage = page"
      v-text="page"
    >
    </atom-button>
  </div>
</template>

<script>
export default {
  name: 'OrganismPagination',
  data() {
    return {
      paginationPage: 1,
    };
  },
  props: {
    perPage: {
      type: Number,
      default: 16,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    pages() {
      return Array.from(
        { length: Math.ceil(this.totalCount / this.perPage) },
        (_, i) => i + 1
      );
    },
  },
};
</script>
