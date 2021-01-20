<template>
  <div
    :class="
      activeMap
        ? 'items mt-8 grid md:grid-cols-2  gap-12 text-xl md:gap-2'
        : 'items mt-8 grid md:grid-cols-2 lg:grid-cols-3 md:gap-4  lg:gap-10 text-xl'
    "
    style=""
  >
    <div
      v-for="estate in estates"
      :key="estate.EstateID"
      class="estateCard relative mb-12 rounded-md overflow-hidden shadow-lg"
    >
      <carousel :paginationEnabled="false" :perPage="1">
        <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
          <div
            @click="displayDetails(estate)"
            class="bgImage"
            :style="`background-image: url(${picture.Url})`"
          ></div>
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
      <div class="h-32 p-3 mb-2">
        <h2 class="font-bold my-2">
          {{ estate.Name }}
          <span v-if="estate.Name && estate.categoryName">-</span>
          {{ estate.categoryName }}
        </h2>
        <span class="">{{ estate.City }} - {{ estate.countryName }}</span>
        <span class="block text-black my-2 mt-6">
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
      <div class="flex justify-between px-3 mt-10 py-1">
        <span v-if="estate.Price" class="block text-base text-black  text-2xl"
          >{{ estate.Price }} {{ estate.Currency }}</span
        >
        <button
          @click="displayDetails(estate)"
          class="bg-yellow-500 px-3 py-2 rounded-full font-bold text-sm block text-white text-base float-right"
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
      this.selectedEstate = estate;
      this.$modal.show("estate-details");
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
.bgImage {
  width: 500px;
  height: 360px;
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
  transform: scale(1.025);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
</style>
