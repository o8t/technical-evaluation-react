<template><l-map style="height:80vh" attribution="© Appleville Geographical Society">
    <l-tile-layer :url="require('@/assets/imgs/tile.jpeg')" :tileSize="512" ></l-tile-layer>
    <l-control-attribution prefix="© Appleville Geographical Society"></l-control-attribution>
    <l-marker v-for="(c,index) in clowns" :key="c._id"   v-model:lat-lng="c.homeAddress">
    <l-icon :icon-url="iconurls[index]" :iconSize="[68, 85]" :iconAnchor="[35, 94]" 
                        :popupAnchor="[-3, -76]" :shadowSize="[30,20]" :shadowAnchor="[17,35]" :shadow-url="require('@/assets/imgs/shadow.png')" />
    <l-popup><b>"{{c.stageName}}"</b><br> ({{c.realName}}) </l-popup><!--can add whatever attributes we want available on the map here, can modify map popup to be whatever format & style we want-->
    </l-marker>
  </l-map>
</template>
  <script>

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LIcon, LMarker, LPopup, LControlAttribution} from "@vue-leaflet/vue-leaflet";

  export default {
   name: "clownMap",
   props:{clowns:Array},
   components: {
    LMap,
    LControlAttribution,
    LIcon,
    LMarker,
    LTileLayer,
    LPopup},
    computed: {
      //iconurls gets a list w same magnitude as clowns list & maps the uris for the clown icons into the corresponding 3d image map marker files. Changing n will allow you to add more images into the rotation as long as they keep the same naming conventions
      iconurls: function(state,n=3){
        var icons = [];
        for(var c=0; c<this.$store.state.clowns.length;c++){
          icons.push(
            require('@/assets/imgs/clown'+(c%n+1)+'.png'))
        }
        return icons;
      }
    }
                    }
  </script>