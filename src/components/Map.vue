<template>
  <div class="p-8">
    <button @click="drawMarkers" class="mr-2 hidden">Draw markers</button>
    <button @click="drawDirection" class="mr-2 hidden">Draw directions</button>
    <button @click="cleanMap" class="mr-2 hidden">Clear Map</button>
    <GmapMap :center="center" :zoom="17" map-type-id="terrain" class="w-full h-screen">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
const home = { lat: 33.99809471978008, lng: -6.859350160559402 };
const work = { lat: 33.99809471978008, lng: -6.859350160559402 };

export default {
  name: "Map",
  data() {
    return {
      markers: [],
      center: home,
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: home,
        },
        {
          position: work,
        },
      ];
    },
    drawDirection() {},
    cleanMap() {},
  },
};
</script>
