<template><l-map style="height:80vh" attribution="© Appleville Geographical Society">
    <l-tile-layer :url="require('@/assets/imgs/tile.jpeg')" :tileSize="512" ></l-tile-layer>
    <l-control-attribution prefix="© Appleville Geographical Society"></l-control-attribution>
    <l-marker v-for="c in clowns" :key="c._id"   v-model:lat-lng="c.homeAddress">
    </l-marker>
  </l-map>
</template>
  <script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";

  export default {
   name: "clownMap",
   props:{clowns:Array},
   components: {
    LMap,
    LMarker,
    LTileLayer},
                    }
  </script>