<template>
  <div
    :class="
      activeMap
        ? 'items mt-8 grid md:grid-cols-2  gap-12 text-xl md:gap-2 h-auto'
        : 'items mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4  lg:gap-10 text-xl'
    "
    style=""
  >
    <div
      v-for="estate in estates"
      :key="estate.EstateID"
      class="estateCard relative mb-12 overflow-hidden shadow-md"
    >
      <carousel :navigationEnabled="true" :paginationEnabled="false" :perPage="1">
        <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
          <div
            v-if="picture"
            @click="displayDetails(estate)"
            class="bgImage h-48 md:h-72 bg-white"
            :style="`background-image: url(${picture.Url})`"
          ></div>
          <div v-else>
            llll=====================================
          </div>

          <!--<div style="height:400px">
            <img
              :src="picture.Url"
              class="w-full object-cover cursor-pointer"
              style="height:100%"
              @click="displayDetails(estate)"
            />
          </div>-->
        </slide>
      </carousel>

      <!--<img
        @click="displayDetails(estate)"
        :src="estate.mainPicture"
        class="w-full h-56 object-cover cursor-pointer"
      />-->
      <!--{{ username.substring(0, 8) + ".." }}-->
      <div class="h-40 p-3 mb-2 border border-2">
        <h2 class="font-bold text-sm md:text-base lg:text-sm">
          <span v-if="estate.Name">{{ estate.Name.substring(0, 18) + " .. " }}</span>
          <span class="u-font-family-system-ui" v-if="estate.Name && estate.categoryName">/</span>
          {{ estate.categoryName.charAt(0).toUpperCase() + estate.categoryName.slice(1) }}
        </h2>
        <span class="text-xs text-gray-400 sm:leading-tight mb-12" v-if="estate.Description">{{
          estate.Description.substring(0, 100) + " .. "
        }}</span>
        <!--<span class="">{{ estate.City }} - {{ estate.countryName }}</span>-->
        <span class="block text-black text-sm md:text-base my-2">
          <span v-if="estate.Rooms" class="lg:mr-2 xl:mr-2 md:mr-10">
            <i class="fas fa-bed  text-yellow-500"></i>
            {{ estate.Rooms }}
          </span>
          <span v-if="estate.Bathrooms" class="lg:mr-2 xl:mr-2 md:mr-10">
            <i class="fas fa-sink   text-yellow-500"></i>
            {{ estate.Bathrooms }}
          </span>
          <span v-if="estate.Area" class="lg:mr-2 xl:mr-2 md:mr-10">
            <i class="fas fa-ruler-combined  text-yellow-500"></i>
            {{ estate.Area }}
          </span>
        </span>
      </div>
      <div
        class="bg-gray-200 text-green-700 text-xs font-bold rounded-full absolute top-0 ml-2 mt-2 px-2 py-1 text-base"
      >
        <span v-if="estate.purpose === 'for rent'">Rent</span>
        <span v-else-if="estate.purpose === 'for sale'">Sale</span>
      </div>
      <div class="flex justify-between px-3 py-1 border border-2 border-t-0">
        <span
          v-if="estate.Price"
          class="block text-base text-black text-base md:text-lg xl:text-xl font-bold align-middle"
          >{{ estate.Price }} {{ estate.Currency }}</span
        >
        <button
          @click="displayDetails(estate)"
          class="bg-yellow-500 px-3 py-2 rounded-full font-bold text-xs block text-white md:text-base float-right"
        >
          Details
        </button>
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
  methods: {
    displayDetails(estate) {
      //this.$modal.hide("estate-details");
      // this.selectedEstate = estate;
      // this.$modal.show("estate-details");
      // this.$router.push()
      this.$router.push({ name: "properties.details", params: { estateId: estate.EstateID } });
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
.bgImage {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
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
