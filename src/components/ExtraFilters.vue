<template>
  <div class="modal-mask w-full">
    <div class="modal-wrapper">
      <div class="modal-container w-1/2 h-auto">
        <button class="modal-default-button float-right" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
        <div class="grid grid-cols-2 gap-8 my-8">
          <input type="text" placeholder="Zip Code" class="px-3 py-2 border" />
          <input type="text" placeholder="SubCategory" class="px-3 py-2 border" />
          <input type="text" placeholder="Min Area" class="px-3 py-2 border" />
          <input type="text" placeholder="Max Area" class="px-3 py-2 border" />
          <input type="text" placeholder="Number of rooms" class="px-3 py-2 border" />
          <input type="text" placeholder="Number of bathrooms" class="px-3 py-2 border" />
        </div>
        <div class="grid grid-cols-4 mb-12">
          <span
            ><label class="m-2"> Parking</label>
            <input type="checkbox" placeholder="Number of bathrooms" class="px-3 py-2 border"
          /></span>
          <span
            ><label class="m-2"> Garden</label>
            <input type="checkbox" placeholder="Number of bathrooms" class="px-3 py-2 border"
          /></span>
          <span
            ><label class="m-2"> Furnished</label>
            <input type="checkbox" placeholder="Number of bathrooms" class="px-3 py-2 border"
          /></span>
          <span
            ><label class="m-2"> Terrace</label>
            <input type="checkbox" placeholder="Number of bathrooms" class="px-3 py-2 border"
          /></span>
        </div>
        <div class="flex justify-end">
          <span
            class="bg-gray-300 px-6 py-2 text-center cursor-pointer mr-2 rounded"
            @click="$emit('close')"
            >Cancel</span
          >
          <span class="bg-yellow-500 px-8 py-2 text-center cursor-pointer rounded">Apply</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    estate: null,
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
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
</style>
