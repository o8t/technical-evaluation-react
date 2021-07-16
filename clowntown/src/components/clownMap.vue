<template><l-map style="height:80vh">
    <l-tile-layer :url="require('@/assets/imgs/tile.jpeg')" :tileSize="512" ></l-tile-layer>
    
  </l-map>
</template>
  <script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

  export default {
   name: "clownMap",
   props:{clowns:Array},
   components: {LMap,
    LTileLayer},
                    }
  </script>