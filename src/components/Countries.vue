<template>
  <select class="w-52 border h-12 mr-2">
    <option>Countries</option>
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
</style>
<script>
export default {
  props: {
    estates: null,
  },
  name: "Countries",
};
</script>
