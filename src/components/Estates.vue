<template>
  <div
    :class="
      activeMap
        ? 'items mt-8 grid md:grid-cols-2  gap-12 text-xl md:gap-6 h-auto'
        : 'items mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4  lg:gap-10 text-xl'
    "
    style=""
  >
    <div
      v-for="estate in estates"
      :key="estate.EstateID"
      class="estateCard relative mb-6 md:mb-4 overflow-hidden shadow-md"
    >
      <div @click="displayDetails(estate)" v-if="estate.pictures[0]">
        <img :src="estate.pictures[0].Url" class="w-full h-52 sm:h-48 object-cover" />
      </div>
      <div @click="displayDetails(estate)" v-else>
        <img src="../assets/img/notavailable.png" class="w-full h-52 sm:h-48 object-cover" />
      </div>
      <!--<carousel :navigationEnabled="true" :paginationEnabled="false" :perPage="1">
        <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
          <div>
            <div
              @click="displayDetails(estate)"
              class="bgImage bg-contain bg-center bg-no-repeat h-48 md:h-72 bg-white"
              :style="`background-image: url(${picture.Url})`"
            ></div>
          </div>

          <!--<div style="height:400px">
            <img
              :src="picture.Url"
              class="w-full object-cover cursor-pointer"
              style="height:100%"
              @click="displayDetails(estate)"
            />
          </div>
        </slide>
        <slide v-if="!estate.pictures || estate.pictures == 0">
          <div>
            <img class="" src="../assets/img/notavailable.png" alt="" />
            <!--<div
              @click="displayDetails(estate)"
              class="bgImage h-48 md:h-72 bg-white"
              :style="`background-image: url(${require('../assets/img/notavailable.png')})`"
            ></div>
          </div>
        </slide>
      </carousel>-->

      <div class="h-32  sm:h-40 p-3 relative">
        <div class="mb-4 truncate">
          <span v-if="estate.Price" class="text-black font-bold text-lg"
            >{{ estate.Price }} {{ estate.Currency }}</span
          >
          <button
            @click="displayDetails(estate)"
            class="float-right px-2 py-1 rounded-full font-bold text-sm block text-white"
            style="background:#fbf0df;color:#df9639"
          >
            Details
          </button>
        </div>
        <h2 class="text-black text-sm lg:text-base font-bold block">
          {{ estate.Name }} <span v-if="estate.Name && estate.Name">-</span>
          {{ estate.categoryName.charAt(0).toUpperCase() + estate.categoryName.slice(1) }}
        </h2>

        <!--<span class="">{{ estate.City }} - {{ estate.countryName }}</span>-->
        <div
          class="grid grid-cols-3 gap-2 block text-black text-sm md:text-base mb-2 absolute bottom-0"
        >
          <span v-if="estate.Rooms" class="">
            <i class="fas fa-bed  text-yellow-500 mr-2"></i>
            {{ estate.Rooms }}
          </span>
          <span v-if="estate.Bathrooms" class="">
            <i class="fas fa-sink   text-yellow-500 mr-2"></i>
            {{ estate.Bathrooms }}
          </span>
          <span v-if="estate.Area" class="">
            <i class="fas fa-ruler-combined  text-yellow-500 mr-2"></i>
            {{ estate.Area }}
          </span>
        </div>
      </div>
      <div
        class="bg-gray-200 text-green-700 text-xs font-bold rounded-full absolute top-0 ml-2 mt-2 px-2 py-1 text-base"
      >
        <span v-if="estate.purpose === 'for rent'">Rent</span>
        <span v-else-if="estate.purpose === 'for sale'">Sale</span>
      </div>
    </div>

    <!-- Estate Modal -->
    <v-modal
      height="auto"
      :adaptive="true"
      :min-width="870"
      :scrollable="true"
      name="estate-details"
    >
      <estate-modal :estate="selectedEstate" :key="'modal-key-' + selectedEstate.EstateID" />
    </v-modal>
  </div>
</template>

<script>
import EstateModal from "@/components/EstateModal.vue";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    EstateModal,
    Carousel,
    Slide,
  },
  data: function() {
    return {
      selectedEstate: {
        estate: null,
        relatedEstates: null,
      },
    };
  },
  computed: {
    defaultEstatePicure() {
      return {
        backgroundImage: `url${require("../assets/img/notavailable.png")}`,
      };
    },
  },
  methods: {
    displayDetails(estate) {
      //this.$modal.hide("estate-details");
      // this.selectedEstate = estate;
      // this.$modal.show("estate-details");
      // this.$router.push()
      this.$router.push({
        name: "properties.details",
        params: { estateId: estate.EstateID },
      });
    },
    displayName() {
      this.estate.Name.substring(1, 2);
    },
  },
  props: {
    estates: null,
    activeMap: false,
  },
  name: "estateBlog",
};
</script>

<style scoped>
html {
  font-family: serif;
}
h2 {
  color: #676360;
}
/*.bgImage {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}*/
.multiselect__option--highlight {
  background: #df9523 !important;
}
.multiselect__tag {
  background: #df9523 !important;
}

.multiselect__tag:hover {
  background: #df9523 !important;
}
.multiselect__option--highlight:after {
  background: #f59e0b !important;
}
.estateCard {
  transition: 0.8s ease;
  cursor: pointer;
}
.estateCard:hover {
  transform: scale(1.01);
  box-shadow: 5px 5px 5px #ddd;
}
.noImage {
  background-image: url("../assets/img/avatar.svg");
}
</style>
