<template>
  <div class="items mt-8 grid xl:grid-cols-3 gap-16" style="">
    <div v-for="estate in estates" :key="estate.EstateID" class="relative mb-12">
      <carousel :paginationEnabled="false" :perPage="1">
        <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
          <div style="height:400px">
            <img
              :src="picture.Url"
              class="w-full object-cover cursor-pointer"
              style="height:100%"
              @click="displayDetails(estate)"
            />
          </div>
        </slide>
      </carousel>
      <!--<img
        @click="displayDetails(estate)"
        :src="estate.mainPicture"
        class="w-full h-56 object-cover cursor-pointer"
      />-->
      <div class="h-32">
        <h2 class="font-bold my-2">{{ estate.Name }} - {{ estate.categoryName }}</h2>
        <span class="my-2">{{ estate.City }} - {{ estate.countryName }}</span>
        <span class="block text-black ">
          <span v-if="estate.Rooms" class="mr-2 md:mr-10">
            <i class="fas fa-bed  text-yellow-500"></i>
            {{ estate.Rooms }}
          </span>
          <span v-if="estate.Bathrooms" class="mr-2 md:mr-10">
            <i class="fas fa-sink   text-yellow-500"></i>
            {{ estate.Bathrooms }}
          </span>
          <span v-if="estate.Area" class="mr-2 md:mr-10">
            <i class="fas fa-ruler-combined  text-yellow-500"></i>
            {{ estate.Area }}
          </span>
        </span>
      </div>
      <div
        class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
      >
        <span>{{ estate.purpose }}</span>
      </div>
      <div class="flex justify-between">
        <span v-if="estate.Price" class="block">{{ estate.Price }} {{ estate.Currency }}</span>
        <button
          @click="displayDetails(estate)"
          class="float-right bg-yellow-500 px-2 py-1 rounded-full font-bold text-sm block text-white"
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
      console.log("hererere");
      //this.$modal.hide("estate-details");
      this.selectedEstate = estate;
      this.$modal.show("estate-details");
    },
  },
  props: {
    estates: null,
  },
  name: "estateBlog",
};
</script>

<style>
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
</style>
