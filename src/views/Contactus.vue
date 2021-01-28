<template>
  <main class="bg-gray-100">
    <div class="container max-w-screen-md mx-auto py-6">
      <h3 class="text-center font-semibold text-3xl">Contact Us</h3>
      <div class="mt-2 mx-auto w-12 h-2 bg-yellow-600"></div>
      <form action="" class="mt-5">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="text-gray-600">First Name</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                type="text"
                placeholder="Your first name..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
              />
            </div>
          </div>
          <div>
            <label class="text-gray-600">Last Name</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                type="text"
                placeholder="Your last name..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
              />
            </div>
          </div>
          <div>
            <label class="text-gray-600">E-mail</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                type="text"
                placeholder="Your E-mail address..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
              />
            </div>
          </div>
          <div>
            <label class="text-gray-600">Phone Number</label>
            <div class="flex items-center my-2 shadow-all">
              <input
                type="text"
                placeholder="Your phone number address..."
                class="w-full pr-10 pl-4 py-3 text-gray-700"
              />
            </div>
          </div>
          <div class="col-span-2">
            <label class="text-gray-600">Phone Number</label>
            <textarea
              type="text"
              placeholder="Your phone number address..."
              class="my-2 shadow-all w-full pr-10 pl-4 py-3 text-gray-700"
              name=""
              id=""
              cols="30"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center mt-6">
          <input type="checkbox" id="register" class="h-4 w-4 text-gray-500 border rounded mr-2" />
          <label class="text-gray-600 font-meduim" for="register">Register for new letter</label>
        </div>
        <div class="flex items-center mt-2">
          <input
            type="checkbox"
            id="accept_terms"
            class="h-4 w-4 text-gray-500 border rounded mr-2"
          />
          <label class="text-gray-600 font-meduim" for="accept_terms">Accept our terms </label>
        </div>
        <div class="text-center mt-4">
          <button class="text-center px-24 py-2 font-semibold bg-yellow-500 text-white">
            Send
          </button>
        </div>
      </form>
    </div>
    <div class="my-6">
      <div class="w-full relative" style="height: 600px;">
        <iframe
          class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.115500598798!2d-13.205914385474111!3d27.15265595625698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc377385dffcb983%3A0x8babf333b39745c2!2sBUC%20SAHARA!5e0!3m2!1sfr!2s!4v1610589576752!5m2!1sfr!2s"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div class="shadow-all bg-white absolute w-96 m-24 top-0 left-0">
          <h3 class="bg-gray-200 font-bold text-xl w-full px-4 py-6 text-center border-b">
            Contact
          </h3>
          <ul class="p-5 border-b">
            <li class="mb-2">info@pixart.be</li>
            <li class="mb-2">+32 04333333</li>
            <li>Rue la neige Bruxelles</li>
          </ul>
          <h3 class="font-bold text-lg px-5 py-3">Opening Hours</h3>
          <div class="px-5 mb-5">
            <div class="flex just justify-between mb-2">
              <span>Monday -Friday</span>
              <span>10:00 - 19:00</span>
            </div>
            <div class="flex just justify-between mb-2">
              <span>Saturday</span>
              <span>10:00 - 14:00</span>
            </div>
            <div class="flex just justify-between mb-2">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.shadow-all {
  -webkit-box-shadow: 0px 0px 4px gray;
  -moz-box-shadow: 0px 0px 4px gray;
  box-shadow: 0px 0px 4px gray;
}
</style>
