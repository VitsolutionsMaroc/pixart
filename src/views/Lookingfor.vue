<template>
  <main class="bg-gray-100">
    <div class="container max-w-screen-md mx-auto py-6">
      <h3 class="text-center font-semibold text-3xl">Search</h3>
      <div class="mt-2 mx-auto w-12 h-2 bg-yellow-600"></div>
      <form action="" class="mt-5">
        <div>
          <div class="grid grid-cols-4 gap-6">
            <div class="col-span-2">
              <label class="text-gray-600 text-transparent">.</label>
              <select class="w-full mt-2 bg-white p-4 shadow-all outline-none">
                <option class="py-1">Option 1</option>
                <option class="py-1">Option 2</option>
                <option class="py-1">Option 3</option>
              </select>
            </div>
            <div>
              <label class="text-gray-600">Min Price</label>
              <div class="flex items-center mt-2 mb-6 shadow-all bg-white ">
                <input type="text" class="w-full pr-10 pl-4 py-3 rounded-lg text-gray-700" />
                <span class="-ml-6 z-10">$</span>
              </div>
            </div>
            <div>
              <label class="text-gray-600">Min Price</label>
              <div class="flex items-center mt-2 mb-6 shadow-all">
                <input type="text" class="w-full pr-10 pl-4 py-3 text-gray-700" />
                <span class="-ml-6 z-10">$</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <select class="w-full mt-2 bg-white p-4 shadow-all outline-none">
                <option class="py-1">Option 1</option>
                <option class="py-1">Option 2</option>
                <option class="py-1">Option 3</option>
              </select>
            </div>
            <div>
              <select class="w-full mt-2 bg-white p-4 shadow-all outline-none">
                <option class="py-1">Option 1</option>
                <option class="py-1">Option 2</option>
                <option class="py-1">Option 3</option>
              </select>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="text-lg font-meduim mb-4">Type:</h4>
            <div class="px-16 grid grid-cols-4 gap-6">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="house"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="house">House</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="appartement"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="appartement">Appartement</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="commercial"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="commercial">Commercial</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="garage"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="garage">Garage/Parking</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="ground"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="ground">Ground</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="office"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="office">Office</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="industrial"
                  class="h-4 w-4 text-gray-500 border rounded mr-2"
                />
                <label class="text-gray-600 font-semibold" for="industrial">Industrial</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-center font-semibold text-3xl mt-12">Your Contact Details</h3>
          <div class="mt-2 mx-auto w-16 h-2 bg-yellow-600"></div>
          <div class="mt-5">
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
            </div>
            <div class="text-center mt-4">
              <button class="text-center px-5 py-2 font-semibold bg-yellow-500 text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
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
