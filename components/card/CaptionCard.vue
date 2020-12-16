<template>
  <div
    class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 xl:gap-card"
  >
    <div
      v-for="item in items"
      :key="item.name"
      class="h-card bg-white border-solid border-border-card shadow-card rounded-card shadow flex flex-row items-center min-w-card"
    >
      <div class="flex-shrink">
        <img
          class="w-card-image mx-25px my-20px"
          :src="require(`~/assets/images/${captionName}/${item.image}`)"
          :alt="item.image"
        />
      </div>
      <div
        class="flex-1 text-card-caption leading-card-caption font-normal text-left"
      >
        <div class="font-bold text-blue">
          {{ item.caption }}{{captionName}}
        </div>
        <div class="text-card-name font-medium text-red leading-card-name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "CaptionCard",
	props: ["items", "captionName"],
};
</script>