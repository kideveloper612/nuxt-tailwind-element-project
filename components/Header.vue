<template>
  <nav
    class="bg-white fixed w-full mb-header-bottom z-10 top-0 shadow px-4"
  >
    <div
      class="container w-full mx-auto block sm:flex-wrap sm:flex items-center mt-0 pt-5 pb-5"
    >
      <div class="flex flex-wrap min-w-head-comp sm:min-w-0">
        <a
          class="font-sans text-2xl text-green font-bold leading-7 no-underline hover:no-underline"
          href="/"
        >
          PlantEats
        </a>
        <div class="block sm:hidden ml-auto">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 appearance-none hover:text-green hover:border-green focus:outline-none"
            @click="toggleMenu"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="sm:flex-grow sm:flex hidden sm:items-center">
        <search-contact></search-contact>
      </div>

      <div v-show="toggle" class="block sm:hidden sm:items-center">
        <search-contact></search-contact>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchContact from "./head/SearchContact.vue";

export default {
  components: {
    SearchContact,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
