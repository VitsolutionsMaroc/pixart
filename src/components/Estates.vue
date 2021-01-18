<template>
  <div class="items mt-8 lg:grid grid-cols-3 gap-16">
    <div v-for="estate in estates" :key="estate.EstateID" class="relative">
      <img
        @click="displayDetails(estate)"
        :src="estate.mainPicture"
        class="w-full h-56 object-cover cursor-pointer"
      />
      <div>
        <h2 class="font-bold my-2">{{ estate.Name }} - {{ estate.categoryName }}</h2>
        <span class="my-2">{{ estate.City }} - {{ estate.countryName }}</span>
        <span class="block text-black">
          <span v-if="estate.Rooms">
            <i class="fas fa-bed mr-12 text-yellow-500"></i>
            {{ estate.Rooms }}
          </span>
          <span v-if="estate.Bathrooms">
            <i class="fas fa-sink mx-2 mr-12 text-yellow-500"></i>
            {{ estate.Bathrooms }}
          </span>
          <span v-if="estate.Area">
            <i class="fas fa-ruler-combined mx-2 text-yellow-500"></i>
            {{ estate.Area }}
          </span>
        </span>
        <span v-if="estate.Price" class="block my-2">{{ estate.Price }} {{ estate.Currency }}</span>
      </div>
      <div
        class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
      >
        <span>{{ estate.purpose }}</span>
      </div>
      <button
        @click="displayDetails(estate)"
        class="float-right bg-yellow-500 px-2 py-1 rounded-full font-bold text-sm mb-2 block text-white"
      >
        Details
      </button>
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

export default {
  components: {
    EstateModal,
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
