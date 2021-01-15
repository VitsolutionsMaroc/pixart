<template>
  <div class="home">
    <div class="slide h-screen p-4 lg:px-16 relative">
      <div class="title lg:px-52 absolute lg:bottom-80">
        <div class="">
          <h1 class="text-white lg:text-6xl text-xl mb-6 leading-normal">
            Real estate advisor & <br />
            property investment Development & consulting <br />
            Expert investment
          </h1>
        </div>
        <div class="mt-12">
          <button class="px-8 py-2 bg-gray-200 mr-2">Buy</button>
          <button class="px-8 py-2 bg-gray-200 mr-2">Rent</button>
          <div class="grid grid-cols-5 gap-4 mt-4">
            <input type="text" placeholder="Search" class="px-3 py-2 border col-span-2" />
            <input type="text" placeholder="Countries" class="col-span-1 px-3 py-2 border" />
            <input type="text" placeholder="Categories" class="px-3 col-span-1 py-2 border" />
            <button class="bg-yellow-500 col-span-1 text-lg font-bold">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="services text-center p-16">
      <h2 class="text-2xl text-black my-2">Our services for you</h2>
      <p class="text-lg my-8">
        Highlight the best of your properties by using the list category shortcake. You can list
        categories, types, cities, areas and states of your choice.
      </p>
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon1.png" />
          <h3 class="m-auto text-xl text-black">
            Investment Consulting Development
          </h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon2.png" />
          <h3 class="m-auto text-xl text-black">Relocation</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>

        <div class="text-center bg-white p-8 m-2">
          <img class="m-auto mb-4" src="../assets/img/icon3.png" />
          <h3 class="m-auto text-xl text-black">Maison de vacance au soleil</h3>
          <p class="m-auto mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam maiores
            quibusdam exercitationem, aliquam voluptate sint dolores iure non at quo, soluta facilis
            recusandae autem aut adipisci veniam cum ab!
          </p>
        </div>
      </div>
    </div>
    <!-- Services -->
    <!-- New Estates -->
    <div class="items mt-8 grid lg:grid-cols-3 gap-10 p-16">
      <div class="relative w-96 m-auto">
        <img src="../assets/img/fond-1.png" class="h-80 sm:48 object-cover mr-2" />
        <div>
          <h2 class="font-bold my-4">Bien exceptionnel</h2>
          <p>
            Mineral reserves: 2008 core drilling And testing (on just 60 of the 1,100 acres) proved
            30
          </p>
          <span class="block">200 $ </span>
        </div>
        <div
          class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
        >
          <span>Sale</span>
        </div>
      </div>

      <div class="relative w-96">
        <img src="../assets/img/fond-2.png" class="w-full h-80 sm:48 object-cover" />
        <div>
          <h2 class="font-bold my-4">Bien exceptionnel</h2>
          <p>
            Mineral reserves: 2008 core drilling And testing (on just 60 of the 1,100 acres) proved
            30
          </p>
          <span class="block">200 $ </span>
        </div>
        <div
          class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
        >
          <span>Sale</span>
        </div>
      </div>

      <div class="relative w-96">
        <img src="../assets/img/fond-3.png" class="w-96 h-80 sm:48 object-cover" />
        <div>
          <h2 class="font-bold my-4">Bien exceptionnel</h2>
          <p>
            Mineral reserves: 2008 core drilling And testing (on just 60 of the 1,100 acres) proved
            30
          </p>
          <span class="block">200 $ </span>
        </div>
        <div
          class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
        >
          <span>Sale</span>
        </div>
      </div>
    </div>

    <!-- New Estates -->

    <!-- about section -->
    <div class="grid lg:grid-cols-2 gap-10 px-16 py-8">
      <div>
        <h1 class="text-4xl md:text-2xl mb-6">PIXART REAL ESTAT</h1>
        <p class="text-2xl md:text-lg mb-4 leading-loose">
          With Over $2 Billion In Sales, Sam Davis Is The Industry’s Top Luxury Producer With Over
          27 Years Of Experience In Marketing South Florida’s Most Prestigious Waterfront
          Properties. Due To His Unparalleled Results, Expertise And Dedication, Sam Ranks Amongst
          The Top 6 Agents In Florida And Is An Elite Member To Corcoran’s Presidents Council.
        </p>
        <button class="bg-yellow-500 px-8 py-4 text-xl text-white">
          Read More
        </button>
      </div>
      <div>
        <img class="w-full" src="../assets/img/welcom.png" alt="" />
      </div>
    </div>

    <!-- about section -->

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
<style scoped>
.slide {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url("../assets/img/background.jpg");
  background-size: cover;
}
.title {
  display: table-cell;
  vertical-align: middle;
}

.services {
  background: #efeaea;
}
</style>
