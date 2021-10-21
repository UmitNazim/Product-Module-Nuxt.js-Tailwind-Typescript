<template>
  <header class="app-header place-items-between">
    <atom-image
      class="hover-opacity-7 mx-2"
      src="https://www.knawat.com/wp-content/themes/knawatv4/dist/images/logo_56c11528.svg"
      alt="knawat-logo"
      width="100"
      height="100"
    ></atom-image>
    <atom-button
      @on-click="isOpen = !isOpen"
      size="md"
      flat
      class="hover-opacity-7 flat h-full relative"
    >
      <atom-image class="mr-2" :src="require('~/assets/icons/basket.svg')" />
      OO.O TL
    </atom-button>

    <organism-card
      v-if="isOpen"
      no-padding
      shadow
      flat
      color="snow-drift"
      class="absolute md:w-2/5 right-px	top-20 sm:w-full p-4 fade-in z-10"
    >
      <div class="place-items-between">
        <div class="font-size-14 text-mid-grey">
          <span class="block"
            >Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span
          >
          <span>78.00 TL</span>
        </div>
        <molecule-counter></molecule-counter>
      </div>
      <atom-divider class="my-2" />
    </organism-card>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
