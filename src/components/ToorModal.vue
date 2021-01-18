<template>
  <div class="modal-wrapper rapperTour p-4">
    <div class="modal-container h-auto containerTour">
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
      <input type="text" placeholder="First Name" class="px-3 py-2 my-2 border block w-full" />
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" class="px-3 py-2 my-2 border block w-full" />
      <label>Phone Number</label>
      <input type="text" placeholder="Phone Number" class="px-3 py-2 my-2 border block w-full" />
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

  <!-- Modal BOOK TOUR -->
</template>
