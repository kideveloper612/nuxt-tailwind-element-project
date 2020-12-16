<template>
  <div
    class="bg-background font-sans leading-normal tracking-normal"
  >
    <Header></Header>

    <!--Container-->
    <div class="container w-full mx-auto pt-20">
      <div
        class="w-full px-4 md:px-0 mt-50px text-gray-800 leading-normal capitalize"
      >
        <div v-for="(item, key) in items" :key="item.name">
          <div class="text-red font-bold mt-10 mb-20px text-group-name">{{ key }}</div>
          <caption-card :items="item" :captionName="key"></caption-card>
        </div>
      </div>
    </div>
    <!--/container-->

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./../components/Header";
import CaptionCard from "./../components/card/CaptionCard";
import Footer from './../components/Footer';

export default {
  components: {
    Header,
    Footer,
    CaptionCard,
  },
  data() {
    return {
      navVisible: true,
      items: {
        macros: [
          {
            caption: "High in",
            name: "Fat",
            image: "fat.svg",
          },
          {
            caption: "High in",
            name: "Protein",
            image: "protein.svg",
          },
          {
            caption: "High in",
            name: "Carbihydrate",
            image: "carbohydrate.svg",
          },
          {
            caption: "High in",
            name: "Fiber",
            image: "fiber.svg",
          },
          {
            caption: "High in",
            name: "Ash",
            image: "ash.svg",
          },
        ],
        minerals: [
          {
            caption: "High in",
            name: "Calcium",
            image: "calcium-ca.svg",
          },
          {
            caption: "High in",
            name: "Iron",
            image: "iron-fe.svg",
          },
          {
            caption: "High in",
            name: "Copper",
            image: "copper-cu.svg",
          },
          {
            caption: "High in",
            name: "Fuloride",
            image: "fluoride-f.svg",
          },
          {
            caption: "High in",
            name: "Magnesium",
            image: "magnesium-mg.svg",
          },
          {
            caption: "High in",
            name: "Manganese",
            image: "manganese-mn.svg",
          },
          {
            caption: "High in",
            name: "Phosphorus",
            image: "phosphorus-p.svg",
          },
          {
            caption: "High in",
            name: "Potassium",
            image: "potassium-k.svg",
          },
          {
            caption: "High in",
            name: "Selenium",
            image: "selenium-se.svg",
          },
          {
            caption: "High in",
            name: "Sodium",
            image: "sodium-na.svg",
          },
          {
            caption: "High in",
            name: "Zinc",
            image: "zinc.svg",
          },
        ],
        vitamins: [
          {
            caption: "High in",
            name: "Vitamin B12",
            image: "vitamin-b12.svg",
          },
          {
            caption: "High in",
            name: "Vitamin A",
            image: "vitamin-a.svg",
          },
          {
            caption: "High in",
            name: "Vitamin B6",
            image: "vitamin-b6.svg",
          },
          {
            caption: "High in",
            name: "Vitamin K",
            image: "vitamin-k.svg",
          },
          {
            caption: "High in",
            name: "Vitamin C",
            image: "vitamin-c.svg",
          },
          {
            caption: "High in",
            name: "Riboflavin",
            image: "riboflavin.svg",
          },
          {
            caption: "High in",
            name: "Niacin",
            image: "niacin.svg",
          },
          {
            caption: "High in",
            name: "Thiamin",
            image: "thiamin.svg",
          },
          {
            caption: "High in",
            name: "folate",
            image: "folate.svg",
          },
        ],
      },
    };
  },
};
</script>
