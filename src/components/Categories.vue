<template>
  <select class="w-52 border h-12 mr-2 mt-2">
    <option>Catgories</option>
    <option></option>
    <option></option>
  </select>
</template>
<style>
.multiselect__option--highlight {
  background: #f59e0b !important;
}
.multiselect__tag {
  display: none;
}
.multiselect__option--highlight:after {
  background: #f59e0b !important;
}
</style>
<script>
export default {
  props: {
    estates: null
  },
  name: "Categories"
};
</script>
