#Welcome to the Appleville Clown Incident Tracking Dashboard!

## Create New Clown Color
```
Go to the included .blend file (located in /src/blends) & simply change the material colors to whatever you desire, then render! 

(from this point it'd be rather trivial to make a python script that automatically generates a clown png with the colors you enter, but I've already strayed off topic enough for now so consider that in the "future updates" category).

Another future update could be to integrate webgl/webgpu into the project so that the clowns can be automatically displayed & live-customized. Could even do it so that you can add custom attributes per clown model instead of simple color changing
```

## Map
```
Map: Click on a clown & you'll receive more info about the clown, including their names (both stage name & real name), license details, biographies, and other details. This is private personal clownformation regulated by strict clownfidentiality law, please dont spread it around.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run Built Files
```
install a webserver (npm install -g serve works), point it at ./dist (serve -s dist will work)
```

