<template>
  <div class="h-full w-full py-3 px-6 mr-4">
    <button @click="openEstateModal()">test</button>
    <div id="map" class="basemap"></div>
  </div>
  <!-- <div>
    <!- <button @click="openEstateModal()">=====================</button> 
  </div> -->
</template>

<script>
import mapboxgl from "mapbox-gl";
import accessKeys from "@/config/accessKeys";

export default {
  props: {
    estateCoordinates: null,
  },
  name: "BaseMap",
  data() {
    return {
      map: null,
    };
  },
  methods: {
    openEstateModal() {
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat([-6.84939, 33.999691])
        .setHTML("test")
        .setLngLat([-6.84939, 33.999691])
        .addTo(this.map);
    },
  },
  mounted() {
    mapboxgl.accessToken = accessKeys.mapBoxAccessToken;
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji",
      center: [-6.84939, 33.999691],
      zoom: 12,
    });

    this.map.on("load", function() {
      this.map.resize();
    });

    if (this.estateCoordinates) {
      this.estateCoordinates.forEach((estate) => {
        var marker = new mapboxgl.Marker().setLngLat([-6.84939, 33.999691]).addTo(this.map);

        this.map.on("click", (e) => {
          var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat([-6.84939, 33.999691])
            .setHTML("test")
            .setLngLat([-6.84939, 33.999691])
            .addTo(this.map);
        });
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.basemap {
  width: 100%;
  min-height: 100%;
}
</style>
