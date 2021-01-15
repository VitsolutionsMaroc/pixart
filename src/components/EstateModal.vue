<template>
  <div class="modal-mask w-full">
    <div class="modal-wrapper">
      <div class="modal-container relative">
        <div class="flex justify-end">
          <button class="" @click="$emit('close')">
            <i class="fas fa-times bg-yellow-500 text-white px-2 py-1 rounded-full closeIcon"></i>
          </button>
        </div>
        <div class="modal-header ">
          <carousel :perPage="1">
            <slide v-for="picture in estate.pictures" v-bind:key="picture.PictureID">
              <img :src="picture.Url" class="w-full h-56 object-cover cursor-pointer" />
            </slide>
          </carousel>
          <!-- Carousel -->
        </div>

        <div class="modalFooter">
          <div class="modal-body">
            <div class="grid grid-cols-2 mt-4 mb-4">
              <div class="section">
                <span class="my-2"> {{ estate.Name }} </span>
                <span class="my-2"> {{ estate.CategoryName }} </span>
                <span class="block my-2">{{ estate.Address1 }}</span>
                <span class="block my-2"> Price : {{ estate.Price }} {{ estate.Currency }} </span>
                <span class="mr-8"
                  ><i class="fas fa-sink mr-2 text-yellow-500"> </i> {{ estate.Rooms }}
                </span>
                <span class="mr-8"
                  ><i class="fas fa-bed mr-2 text-yellow-500"></i> {{ estate.Bathrooms }}</span
                >
                <span mr-8>
                  <i class="fas fa-ruler-combined mr-2 text-yellow-500"></i> {{ estate.Area }}
                  <span v-if="estate.Area">m²</span>
                </span>

                <i class="fas fa-rectangle-wide"></i>

                <h2 class="my-2 font-bold text-lg">Description</h2>
                <p>
                  {{ estate.Description }}
                </p>

                <!-- slider Similar properties -->

                <!-- slider Similar properties -->
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
                    :src="estate.representativePicture.Url"
                    class="rounded-full h-24 w-24 flex items-center m-auto"
                  />

                  <h2 class="mt-2 text-center m-auto">
                    {{ estate.representativeName }} {{ estate.representativeLastName }}
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
                        <button
                          class="modal-default-button float-right"
                          @click="bookTour = !bookTour"
                        >
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
                        <button
                          class="block bg-yellow-500 w-full py-3 mt-6 text-white font-bold text-lg"
                        >
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
          </div>
          <div class="modal-footer">
            <h2 class="my-2 font-bold text-lg">Similar Properties</h2>
            <div class="grid grid-cols-3 gap-4">
              <div
                class="relative border border-yellow-300"
                v-for="relatedEstate in relatedEstates"
                :key="relatedEstate.EstateID"
              >
                <carousel :perPage="1">
                  <slide v-for="picture in relatedEstate.pictures" v-bind:key="picture.PictureID">
                    <img :src="picture.Url" class="w-full h-56 object-cover cursor-pointer" />
                  </slide>
                </carousel>
                <div class="p-2">
                  <h2 class="font-bold my-2">
                    {{ relatedEstate.Name }} - {{ relatedEstate.categoryName }}
                  </h2>
                  <span class="my-2"
                    >{{ relatedEstate.City }} - {{ relatedEstate.countryName }}</span
                  >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueEnglishdatepicker from "vue-englishdatepicker";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
  props: {
    estate: null,
    relatedEstates: null,
  },
  components: {
    VueEnglishdatepicker,
    DatePick,
    Carousel,
    Slide,
  },
  data: function() {
    return {
      bookTour: false,
      date: "2019-01-01",
      picSwiper: null,
      contact: {
        Name: "test test",
        FirstName: "",
        Address1: "",
        Address2: "",
        Number: "",
        Box: "",
        Zip: "",
        City: "",
        CountryId: 3,
        PrivateTel: "",
        PrivateEmail: "test@test.com",
        AgreementEmail: true,
        AgreementSms: true,
        Comments: "",
        Message: "",
        ContactOriginId: 0,
        PrivateMobile: "",
        AgreementMailingCampaign: true,
        LanguageId: "en-GB",
        EstateIds: [0],
        OfficeIds: [2],
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
      let authCredentials = { Username: "jan@test.be", Password: "Vitsolutions_123" };

      axios
        .post("https://api.whise.eu/token", authCredentials)
        .then((response) => {
          let token = response.data.token;
          const config = { headers: { Authorization: `Bearer ${token}` } };
          axios
            .post("https://api.whise.eu/v1/contacts/create", this.contact, config)
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
  },
  mounted() {
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
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  margin: 10px auto;
  padding: 20px 30px;
  padding-top: 0px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  min-height: 300px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modalFooter {
  max-height: 60vh;
  overflow: auto;
}
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
.VueCarousel-dot-button {
  display: none !important;
}
.closeIcon {
  position: absolute !important;
  top: -10px;
  right: -12px;
}
</style>
