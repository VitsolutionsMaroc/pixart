<template>
  <div>
    <carousel :perPage="1">
      <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
        <img :src="picture.Url" class="w-full object-cover cursor-pointer" style="height: 400px" />
      </slide>
    </carousel>
    <hr />
    <div class="p-4" style="overflow-y: scroll; max-height: 400px;">
      <div class="grid grid-cols-2 mt-4 mb-4">
        <div class="section">
          <span class="my-2"> {{ estate.Name }} </span>
          <span class="my-2"> {{ estate.CategoryName }} </span>
          <span class="block my-2">{{ estate.Address1 }}</span>
          <span class="block my-2"> Price : {{ estate.Price }} {{ estate.Currency }} </span>
          <span class="mr-8"
            ><i class="fas fa-sink mr-2 text-yellow-500"> </i>
            {{ estate.Rooms }}
          </span>
          <span class="mr-8"
            ><i class="fas fa-bed mr-2 text-yellow-500"></i> {{ estate.Bathrooms }}</span
          >
          <span mr-8>
            <i class="fas fa-ruler-combined mr-2 text-yellow-500"></i>
            {{ estate.Area }}
            <span v-if="estate.Area">m²</span>
          </span>

          <i class="fas fa-rectangle-wide"></i>

          <h2 class="my-2 font-bold text-lg">Description</h2>
          <p>
            {{ estate.Description }}
          </p>
        </div>
        <div>
          <!--<form @submit.prevent="addContact()">
                    <label class="my-2">Address1</label>
                    <input
                      type="text"
                      v-model="contact.Address1"
                      placeholder="Address"
                      class="px-3 py-2 my-2 border block w-full"
                    />
                    <label class="my-2">Name</label>
                    <input
                      type="text"
                      v-model="contact.Name"
                      placeholder="Name"
                      class="px-3 py-2 my-2 border block w-full"
                    />
                    <label class="my-2">Zip</label>
                    <input
                      type="text"
                      v-model="contact.Zip"
                      placeholder="Zip"
                      class="px-3 py-2 my-2 border block w-full"
                    />
                    <button type="submit">Send</button>
                  </form>-->
          <div
            v-if="estate.RepresentativeID != null"
            class="relative float-right shadow-2xl bg-white border-gray-200 w-72 h-72 p-4"
          >
            <img
              :src="estate.representativePicture"
              class="rounded-full h-24 w-24 flex items-center m-auto"
            />

            <h2 class="mt-2 text-center m-auto">
              {{ estate.representativeName }}
              {{ estate.representativeLastName }}
            </h2>
            <h2 class="mt-2 text-center m-auto bg-yellow-500 text-white p-2">
              contacter par E-mail
            </h2>
            <h2 class="mt-2 text-center m-auto bg-gray-200 text-gray-600 p-2">
              Contacter par telphone
            </h2>

            <button @click="bookTour = !bookTour" class="mt-2 w-full m-auto">
              BOOK A TOUR
            </button>
            <!-- Modal BOOK TOUR -->
            <div v-if="bookTour" class="modal-mask bookTour hidden">
              <div class="modal-wrapper rapperTour">
                <div class="modal-container w-1/2 h-auto containerTour">
                  <button class="modal-default-button float-right" @click="bookTour = !bookTour">
                    <i class="fas fa-times"></i>
                  </button>
                  <!--<vue-englishdatepicker />-->
                  <date-pick v-model="date"></date-pick>
                  <p class="italic text-gray-400 my-2">
                    <span class="w-2 h-2 bg-yellow-500"></span
                    ><span
                      >Book Your visit by choosing te date <br />
                      And time from the calendar</span
                    >
                  </p>
                  <label class="my-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    class="px-3 py-2 my-2 border block w-full"
                  />
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="px-3 py-2 my-2 border block w-full"
                  />
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="px-3 py-2 my-2 border block w-full"
                  />
                  <button class="block bg-yellow-500 w-full py-3 mt-6 text-white font-bold text-lg">
                    Book visit
                  </button>
                  <button
                    @click="bookTour = !bookTour"
                    class="block w-full py-3 my-2 text-gray-400 font-bold text-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <!-- Modal BOOK TOUR -->
          </div>
        </div>
      </div>
      <hr />
      <h2 class="my-2 font-bold text-lg">Similar Properties</h2>
      <div class="grid grid-cols-3 gap-4">
        <div
          class="relative border border-yellow-300"
          v-for="relatedEstate in relatedEstates"
          :key="relatedEstate.EstateID"
          @click="displayRelatedEstateDetails(relatedEstate)"
        >
          <carousel :paginationEnabled="false" :perPage="1">
            <slide v-for="picture in relatedEstate.pictures" v-bind:key="picture.PictureID">
              <img :src="picture.Url" class="w-full h-56 object-cover cursor-pointer" />
            </slide>
          </carousel>
          <div class="p-2">
            <h2 class="font-bold my-2">
              {{ relatedEstate.Name }} - {{ relatedEstate.categoryName }}
            </h2>
            <span class="my-2">{{ relatedEstate.City }} - {{ relatedEstate.countryName }}</span>
            <div class="text-black grid grid-cols-3">
              <div v-if="relatedEstate.Rooms">
                <i class="fas fa-bed mr-2 text-yellow-500"></i>
                {{ relatedEstate.Rooms }}
              </div>
              <div v-if="relatedEstate.Bathrooms">
                <i class="fas fa-sink mx-2 mr-2 text-yellow-500"></i>
                {{ relatedEstate.Bathrooms }}
              </div>
              <div v-if="relatedEstate.Area">
                <i class="fas fa-ruler-combined mx-2 text-yellow-500"></i>
                {{ relatedEstate.Area }}
              </div>
            </div>
            <span v-if="relatedEstate.Price" class="block my-2"
              >{{ relatedEstate.Price }} {{ relatedEstate.Currency }}</span
            >
          </div>
          <div
            class="bg-gray-200 text-green-700 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2"
          >
            <span>{{ relatedEstate.purpose }}</span>
          </div>

          <button
            class="float-right bg-yellow-500 px-2 py-1 rounded-full font-bold text-sm mb-2 block text-white"
          >
            Details
          </button>
        </div>
        <loader class="px-2 py-10" v-show="loadingRelatedEstates" />
        <button
          class="border-2 border-yellow-500 border-dashed text-bold text-yellow-500 p-4 h-full"
          v-show="relatedEstateApiUrl && !loadingRelatedEstates"
          @click="loadRelatedEstates()"
        >
          More related Estates
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueEnglishdatepicker from "vue-englishdatepicker";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import Loader from "@/components/shared/Loader.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
  props: {
    estate: null,
  },
  components: {
    VueEnglishdatepicker,
    DatePick,
    Loader,
    Carousel,
    Slide,
  },
  data: function() {
    return {
      loadingRelatedEstates: false,
      relatedEstates: [],
      relatedEstateApiUrl: `https://apivitexport.azurewebsites.net/api/estates/${this.estate.EstateID}/related-estates`,
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
              Authorization: `Bearer ${token}`,
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
    loadRelatedEstates() {
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
  mounted() {
    this.initSwiper();
    this.loadRelatedEstates();
  },
};
</script>

<style scoped>
.bookTour {
  width: 100%;
}
.rapperTour {
}
.containerTour {
  width: 500px;
}
.pic-slide {
  height: 400px !important;
  background-size: cover;
}
</style>
