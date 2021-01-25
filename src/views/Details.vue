<template>
  <div class="xl:px-48">
    <!--<button class="bg-yellow-500 px-4 py-3 text-white mb-2">
      <i class="fas fa-undo"></i> Back to Properties page
    </button>-->
    <loader class="py-10" v-if="!estate" />
    <div v-else>
      <div class="xl:px-16 py-6 grid grid-cols-3 xl:gap-10">
        <div class="shadow-md col-span-2 p-2">
          <!-- Slider -->
          <div>
            <carousel
              :navigationEnabled="true"
              :paginationEnabled="false"
              :perPage="1"
              class="bg-green"
            >
              <slide
                v-for="picture in estate.pictures"
                v-bind:key="picture.PictureID"
                class="slideDetails flex"
                style=""
              >
                <img :src="picture.Url" class="mx-auto w-auto h-full cursor-pointer" />
              </slide>
            </carousel>
          </div>
          <!-- Slider -->
          <!-- Property details -->
          <div class="section-right p-4">
            <div class="font-bold text-xl py-2 mb-8">
              <span v-if="estate.Price" class="">
                Price : {{ estate.Price }} {{ estate.Currency }}
              </span>
              <span class="float-right" style="color:#39D47A">{{
                estate.purpose.charAt(0).toUpperCase() + estate.purpose.slice(1)
              }}</span>
            </div>

            <span class="my-2 block text-black font-bold text-xl">{{ estate.Name }} </span>
            <span class="my-2 block"> {{ estate.CategoryName }} </span>
            <span class="block my-2 text-gray-400">{{ estate.Address1 }}</span>

            <span class="mr-8" v-if="estate.Rooms"
              ><i class="fas fa-sink mr-2 text-yellow-500"></i> {{ estate.Rooms }}
            </span>
            <span class="mr-8" v-if="estate.Bathrooms"
              ><i class="fas fa-bed mr-2 text-yellow-500"></i> {{ estate.Bathrooms }}</span
            >
            <span mr-8>
              <i class="fas fa-ruler-combined mr-2 text-yellow-500"></i>
              {{ estate.Area }}
              <span v-if="estate.Area">m²</span>
            </span>

            <i class="fas fa-rectangle-wide"></i>

            <h2 class="block text-black font-bold text-xl my-4">Property details</h2>
            <div class="grid grid-cols-3">
              <span class="text-gray-600 font-bold mb-1">Parking</span>
              <span class="text-gray-600 font-bold mb-1">Garage</span>
              <span class="text-gray-600 font-bold mb-1">Terrace</span>
              <span v-if="estate.Parking">Yes</span>
              <span v-else>No</span>
              <span v-if="estate.Garage">Yes</span>
              <span v-else>No</span>
              <span v-if="estate.Terrace">Yes</span>
              <span v-else>No</span>
            </div>
            <div class="grid grid-cols-3">
              <span class="text-gray-600 font-bold mb-1">Ground Area</span>
              <span class="text-gray-600 font-bold mb-1">Garden Area</span>
              <span class="text-gray-600 font-bold mb-1">Purpose</span>
              <span class="mb-2">{{ estate.GroundArea }}</span>
              <span class="mb-2">{{ estate.GardenArea }}</span>
              <span class="mb-2">{{ estate.purpose }}</span>
            </div>

            <h2 class="my-2 font-bold text-lg">Description</h2>
            <p>
              {{ estate.Description }}
            </p>
          </div>
          <!-- Property details -->
          <!-- Related Estates -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <router-link
              :to="{ name: 'properties.details', params: { estateId: relatedEstate.EstateID } }"
              class="relative"
              v-for="(relatedEstate, index) in relatedEstates"
              :key="relatedEstate.EstateID + '-' + index"
            >
              <carousel :paginationEnabled="false" :perPage="1">
                <slide v-for="picture in relatedEstate.pictures" v-bind:key="picture.PictureID">
                  <img :src="picture.Url" class="w-full h-56 object-cover cursor-pointer" />
                </slide>
              </carousel>

              <div
                class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
              >
                <span>{{ relatedEstate.purpose }}</span>
              </div>
              <div class="mt-4 mb-2 truncate">
                <span v-if="relatedEstate.Price" class="text-black font-bold text-lg"
                  >{{ relatedEstate.Price }} {{ relatedEstate.Currency }}</span
                >
                <button
                  class="float-right px-2 py-1 rounded-full font-bold text-sm block text-white"
                  style="background:#fbf0df;color:#df9639"
                >
                  Details
                </button>
              </div>
              <h2 class="text-black text-sm font-bold mb-4 block">
                {{ estate.Name }} <span v-if="estate.Name && estate.Name">-</span>
                {{ estate.categoryName.charAt(0).toUpperCase() + estate.categoryName.slice(1) }}
              </h2>
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
            </router-link>
          </div>
          <loader class=" py-10" v-show="loadingRelatedEstates" />
          <div
            class="font-bold mx-auto text-lg text-center my-4 cursor-pointer py-2 w-2/6 rounded-full"
            v-show="relatedEstateApiUrl && !loadingRelatedEstates"
            @click="loadRelatedEstates()"
            style="background:#fbf0df;color:#df9639"
          >
            More related Estates
          </div>
          <!-- Related Estates -->
        </div>
        <!-- Contact section -->
        <div class="p-2">
          <div class="shadow-md xl:p-8 xl:px-10">
            <div class="xl:flex items-center " v-if="estate.RepresentativeID != null">
              <img :src="estate.representativePicture.Url" class="rounded-full h-24 w-24 mr-12" />

              <h2 class="text-xl text-gray-400">
                {{ estate.representativeName }}
                {{ estate.representativeLastName }}
              </h2>
            </div>
            <div class="xl:flex items-center mb-2" v-else>
              <img src="../assets/img/avatar.svg" class="rounded-full h-24 items-center" />

              <span class="text-xl text-gray-400">
                Pixart User
              </span>
            </div>
            <button
              @click="displayContactModal"
              class="mt-6 text-center m-auto text-white p-2 py-4 w-full text-lg font-bold"
              style="background:#fbf0df;color:#df9639"
            >
              Contact us
            </button>
          </div>
          <v-modal
            height="auto"
            :adaptive="true"
            :min-width="100"
            :scrollable="true"
            name="contact"
          >
            <contact-modal />
          </v-modal>
        </div>
        <!-- Contact section -->
      </div>
    </div>
  </div>
</template>

<script>
import VueEnglishdatepicker from "vue-englishdatepicker";
import ToorModal from "@/components/ToorModal.vue";
import ContactModal from "@/components/ContactModal.vue";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import Loader from "@/components/shared/Loader.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    VueEnglishdatepicker,
    DatePick,
    Loader,
    Carousel,
    Slide,
    ToorModal,
    ContactModal,
  },
  data: function() {
    return {
      estateId: this.$route.params.estateId,
      estate: null,
      loadingRelatedEstates: false,
      relatedEstates: [],
      relatedEstateApiUrl: `http://localhost:8000/api/estates/${this.$route.params.estateId}/related-estates`,
      bookTour: false,
      date: "2019-01-01",
      picSwiper: null,
      relatedEstatesOpen: false,
      contact: {
        // Name: "test test",
        // FirstName: "",
        Address1: "",
        Address2: "",
        Number: "",
        Box: "",
        Zip: "",
        // City: "",
        // CountryId: 3,
        // PrivateTel: "",
        // PrivateEmail: "test@test.com",
        // AgreementEmail: true,
        // AgreementSms: true,
        // Comments: "",
        // Message: "",
        // ContactOriginId: 0,
        // PrivateMobile: "",
        // AgreementMailingCampaign: true,
        // LanguageId: "en-GB",
        EstateIds: [3515113],
        OfficeIds: [4381],

        CountryId: 1,
        StatusId: 1,
        LanguageId: "fr-BE",

        Name: "New contact",
        PrivateEmail: "test_contact@whise.mail",
      },
    };
  },
  methods: {
    displayToor() {
      this.$modal.show("toor");
    },
    displayContactModal() {
      this.$modal.show("contact");
    },
    displayCreateContact() {
      this.$modal.show("createContact");
    },
    prevSlide() {
      this.picSwiper.slidePrev();
    },
    nextSlide() {
      this.picSwiper.slideNext();
    },
    addContact() {
      let authCredentials = {
        ClientId: 445,
        OfficeId: 4381,
      };

      let apiToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMDkyOTE0M30.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MTE2LCJ0eXBlSWQiOjIsImNsaWVudElkIjozMjUyfQ.wBJavsF3YRYI1FU-a0xYvSLNnaObs_bt7YahP3V82qM";

      const config = {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      };

      axios
        .post("https://api.whise.eu/v1/admin/clients/token", authCredentials, config)
        .then((response) => {
          let token = response.data.token;
          console.log(token);
          const config = {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlhdCI6MTYxMTA2MjI1N30.eyJzZXJ2aWNlQ29uc3VtZXJJZCI6MjMzLCJ0eXBlSWQiOjQsImNsaWVudElkIjo0NDV9.lsZ7HrGZ-vU0kh6xBcavI2Y-UP1BM4a8NnIAKcY33Fk`,
              "Content-Type": "application/json",
            },
          };

          let contact = {
            Name: "New contact",
            PrivateEmail: "test_contact@whise.mail",
            EstateIds: [3515113],
            OfficeIds: [4381],
            CountryId: 1,
            StatusId: 1,
            LanguageId: "fr-BE",
          };
          axios
            .post("https://api.whise.eu/v1/contacts/create", contact, config)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadEstate() {
      let estateId = this.$route.params.estateId;
      axios
        .get(`http://localhost:8000/api/estates/${estateId}`)
        .then((response) => {
          this.estate = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadRelatedEstates() {
      console.log("loadRelatedEstates");
      console.log("loadRelatedEstates");
      this.loadingRelatedEstates = true;
      axios
        .get(this.relatedEstateApiUrl)
        .then((response) => {
          this.relatedEstateApiUrl = response.data.next_page_url;
          this.relatedEstates.push(...response.data.data);
          this.loadingRelatedEstates = false;
        })
        .catch((error) => {
          this.loadingRelatedEstates = false;
          console.log(error);
        });
    },
    displayRelatedEstateDetails(estate) {
      this.$parent.$parent.displayDetails(estate);
    },
    initSwiper() {
      this.picSwiper = new Swiper(this.$refs.swiperContainer, {
        cssMode: true,
        navigation: {
          nextEl: this.$refs.swiperButtonNext,
          prevEl: this.$refs.swiperButtonPrev,
        },
        pagination: {
          el: this.$refs.swiperPagination,
        },
        mousewheel: true,
        keyboard: true,
      });
    },
  },
  watch: {
    "$route.params": {
      handler(params) {
        this.loadEstate();
        this.relatedEstateApiUrl = `http://localhost:8000/api/estates/${params.estateId}/related-estates`;
        this.relatedEstates = [];
        this.loadRelatedEstates();
      },
      immediate: true,
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>

<style scoped>
/*.bgImage {
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}*/

.bookTour {
  width: 100%;
}
.containerTour {
  width: 500px;
}
.pic-slide {
  height: 400px !important;
  background-size: cover;
}
.slideDetails {
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
