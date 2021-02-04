<template>
  <div class="">
    <h2 class="font-bold text-xl md:text-4xl text-center p-10 py-10 md:py-16">EVALUATION</h2>
    <div class="px-4 md:px-16 lg:px-36 text-base lg:text-lg">
      <p>Do you want to sell your property ?</p>
      <p>
        Our experts provide an accurate evaluation based on the market trends and their experience
      </p>
      <p>Fill out th form below and we will contact you promptly</p>
    </div>
    <!-- form -->
    <form class="px-4 md:px-16 lg:px-36 my-4 text-sm">
      <h2 class="text-center font-bold text-xl my-4">Contact</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="my-2">Gender</label>
          <input type="text" placeholder="Mr/Mlle" class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div>
          <label class="my-2">Name</label>
          <input
            type="text"
            placeholder="Your Full name .."
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
        <div>
          <label class="my-2">Email *</label>
          <input
            type="text"
            placeholder="Your Email address .."
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
        <div>
          <label class="my-2">Phone Number *</label>
          <input
            type="text"
            placeholder="Your Phone Number .."
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
      </div>

      <h2 class="text-center font-bold text-xl my-4">Address</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="my-2">Address *</label>
          <input type="text" placeholder="Address" class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div>
          <label class="my-2">Number *</label>
          <input type="text" placeholder="Number .." class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div>
          <label class="my-2">City *</label>
          <input type="text" placeholder="City .." class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div>
          <label class="my-2">PostCode *</label>
          <input type="text" placeholder="Postcode .." class="px-3 py-2 my-2 border block w-full" />
        </div>
      </div>

      <h2 class="text-center font-bold text-xl my-4 gap-4">Property description</h2>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="my-2">Transaction type</label>
          <input
            type="text"
            placeholder="For sale/rent"
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
        <div>
          <label class="my-2">Owner</label>
          <input type="text" placeholder="Owner" class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div>
          <label class="my-2">Property type</label>
          <input type="text" placeholder="City .." class="px-3 py-2 my-2 border block w-full" />
        </div>
        <div></div>
        <div class="flex">
          <input type="checkbox" placeholder="Postcode .." class="border" />
          <label class="">Already sale</label>
        </div>
        <div></div>
        <div>
          <label class="my-2">Construction Year</label>
          <input
            type="text"
            placeholder="For sale/rent"
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
        <div>
          <label class="my-2">Surface</label>
          <input
            type="text"
            placeholder="Property Surface .."
            class="px-3 py-2 my-2 border block w-full"
          />
        </div>
        <div class="col-span-2 my-2">
          <label>Comments</label>
          <textarea class="w-full border border-2 h-32"></textarea>
        </div>
      </div>
      <button class="bg-yellow-500 text-white px-4 py-2 mx-auto">Submit</button>
    </form>
    <!-- form -->
  </div>
</template>
