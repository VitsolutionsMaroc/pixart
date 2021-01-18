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
          <div class="flex">
            <button
              class="border-2 px-7 p-1 text-black bg-white"
              @click="togglePurpose()"
              :class="{
                'bg-yellow-500 border-yellow-500': filters.purpose == 'for sale',
              }"
            >
              Buy
            </button>
            <button
              class="border-2 px-5 p-1 text-black bg-white"
              @click="togglePurpose()"
              :class="{
                'bg-yellow-500 border-yellow-500': filters.purpose == 'for rent',
              }"
            >
              Rental
            </button>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-4">
            <div class="flex w-full border-grey-light bg-white border mb-2">
              <button>
                <span class="w-auto flex justify-end items-center text-grey p-2">
                  <svg
                    class="w-6 h-6 bg-yelleow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
              </button>
              <input
                class="w-full rounded mr-4"
                type="text"
                placeholder="Search..."
                v-model="filters.keyword"
              />
            </div>
            <multiselect
              placeholder="categories"
              label="name"
              track-by="name"
              :multiple="true"
              value="id"
              v-model="filters.categories"
              :options="categories"
              :close-on-select="false"
              :show-labels="false"
              :clear-on-select="false"
            >
              <div
                class="selection-count"
                slot="selection"
                slot-scope="{ values, search, isOpen, remove }"
              >
                <template v-if="!isOpen && values.length">
                  {{ values.length }}
                  {{ values.length > 1 ? "categories" : "category" }} selected
                </template>
              </div>
              <template slot="option" slot-scope="props">
                <div class="flex justify-between items-center">
                  <span>{{ props.option.name }}</span>
                  <span
                    v-if="isCategorySelected(props.option.id)"
                    class="text-right text-sm"
                  ></span>
                </div>
              </template>
            </multiselect>
            <multiselect
              placeholder="countries"
              label="name"
              track-by="name"
              :multiple="true"
              value="id"
              v-model="filters.countries"
              :options="countries"
              :close-on-select="false"
              :show-labels="false"
              :clear-on-select="false"
            >
              <div
                class="selection-count"
                slot="selection"
                slot-scope="{ values, search, isOpen, remove }"
              >
                <template v-if="!isOpen && values.length">
                  {{ values.length }}
                  {{ values.length > 1 ? "categories" : "category" }} selected
                </template>
              </div>
              <template slot="option" slot-scope="props">
                <div class="flex justify-between items-center">
                  <span>{{ props.option.name }}</span>
                  <span v-if="isCountrySelected(props.option.id)" class="text-right text-sm"></span>
                </div>
              </template>
            </multiselect>
            <button @click="search()" class="bg-yellow-500 text-lg font-bold">
              Search
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
import axios from "axios";
import Multiselect from "vue-multiselect";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    Multiselect,
    Footer,
  },
  data() {
    return {
      filters: {
        keyword: "",
        purpose: "for rent",
        countries: [],
        categories: [],
      },
      countries: [],
      categories: [],
    };
  },
  methods: {
    togglePurpose() {
      this.filters.purpose = this.filters.purpose == "for rent" ? "for sale" : "for rent";
    },
    getCategories() {
      axios
        .get(`https://apivitexport.azurewebsites.net/api/categories`)
        .then((response) => {
          this.categories = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCountries() {
      axios
        .get(`https://apivitexport.azurewebsites.net/api/countries`)
        .then((response) => {
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isCountrySelected(currentCountry) {
      return this.filters.countries.filter((country) => country.id === currentCountry).length > 0;
    },
    isCategorySelected(currentCategory) {
      return (
        this.filters.categories.filter((category) => category.id === currentCategory).length > 0
      );
    },
    search() {
      let filterParams = {
        keyword: this.filters.keyword,
        countries: _.map(this.filters.countries, "id"),
        categories: _.map(this.filters.categories, "id"),
      };
      this.$router.push({ name: "properties", query: filterParams });
    },
  },
  mounted() {
    this.getCountries();
    this.getCategories();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
