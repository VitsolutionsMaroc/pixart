<template>
  <div class="modal-wrapper rapperTour p-8">
    <h2 class="text-lg text-gray-600 font-bold mb-4">Create New Contact</h2>
    <!--<div class="modal-container h-auto containerContact">
      <label class="my-2">First Name</label>
      <input type="text" placeholder="First Name" class="px-3 py-2 my-2 border block w-full" />
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" class="px-3 py-2 my-2 border block w-full" />
      <label>Email</label>
      <input type="text" placeholder="Email" class="px-3 py-2 my-2 border block w-full" />
      Your phone number
      <input type="text" placeholder="Phone Number" class="px-3 py-2 my-2 border block w-full" />
      Your message
      <textarea class="border-2 block w-full h-32" name="Your message"></textarea>
      <button class="block bg-yellow-500 w-full py-3 mt-6 text-white font-bold text-lg">
        Submit
      </button>
    </div>-->
    <form @submit.prevent="addContact()">
      <label class="my-2">Name</label>
      <input
        type="text"
        placeholder="Name"
        v-model="contact.Name"
        class="px-3 py-2 my-2 border block w-full"
      />
      <label class="my-2">Address1</label>
      <input
        type="text"
        placeholder="Address"
        v-model="contact.Address1"
        class="px-3 py-2 my-2 border block w-full"
      />
      <label class="my-2">Zip</label>
      <input
        type="text"
        placeholder="Zip"
        v-model="contact.Zip"
        class="px-3 py-2 my-2 border block w-full"
      />
      <button class="block bg-yellow-500 w-full py-3 mt-6 text-white font-bold text-lg">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      contact: {
        //Name: "test test",
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
              this.contact.Name = "";
              this.contact.Address1 = "";
              this.contact.Zip = "";
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
};
</script>
