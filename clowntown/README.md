#Welcome to the Appleville Clown Incident Tracking Dashboard!

### ABOUT

## Create New Clown Color
```
Go to the included .blend file (located in /src/blends) & simply change the material colors to whatever you desire, then render! 

(from this point it'd be rather trivial to make a python script that automatically generates a clown png with the colors you enter, but I've already strayed off topic enough for now so consider that in the "future updates" category).

Another future update could be to integrate webgl/webgpu into the project so that the clowns can be automatically displayed & live-customized. Could even do it so that you can add custom attributes per clown model instead of simple color changing
```

## Map
```
Click on a clown & you'll receive more info about the clown, including their names (both stage name & real name), license details, biographies, and other details. This is private clownformation regulated by strict clownfidentiality law, please dont spread it around.
```

## Packages:
```
	Vue-Leaflet is included for a customizable map using vue bindings.

	Vuex is included for ease of automatically reloading values upon state change without having to explicitly write extra logic  
```

##Schema:
```
 only fairly basic info implemented in frontend, included a models.py file that should be valid django ORM schema creation for the "final" product (havent tested it yet but its intended to meaningfully point towards a broader implementation)
```

##Not Included:
```
	object persistence past reload, ideally I'd do that in SQL & I dont think its rly worth my while to set up a REST server & sql interpreter, honestly bc Ive always done that through the backend instead of thru Node so I wouldnt know what packages to install. If this were implemented, I'd likely use axios on the frontend to talk to the background API

	Authentication of any kind, again should be done on backend (so dont let the clowns find this!)
	
	super duper sleek UI design, I'm mostly a backend person who tries to get the front end a couple steps less ugly than purely functional, but not too many steps

	no form checking, play gentle :)

	not optimized for mobile
```

##Known Bugs:
```
	the clown images outline renders funky on the hair, clips behind head

	size is much different in appleville, while you may think you're zooming in the world may be zooming out. how do you think so many clowns can fit in one car? (translation: would need to create a set of different sized tiles to fix zooming problem, and that just seems like superfluous effort)


	uploading two clowns with profile pics will rewrite all pics to the latest uploaded one. There's probably a way to fix this without needing backend file saving, but I wanted to keep this app solely frontend (ie no distinct node servers need to be running, can just load as file) so the images are just saved as base64 strings
```

##Future:
```
	convert to typescript

	fully implement more complex API

	be able to scan license of everyone in clown car (*everyone*)

	make licenses look more like licenses & define grid location for attributes

	connect licenses in list to licenses on map (ie clicking on map highlights the license of that clown & scrolls down to it)
	
	AddNewClown fields show thru popup animation

	use clown's personal uploaded image on map, 3d clowns only when none provided (also match 3d clown w hair color instead of modulating by index?)
```
### INSTALLATION/RUNNING

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
install a webserver (npm install -g serve works), point it at ./dist (serve -s dist will work) (or just set up an nginx server)

technically, since this app is 100% self-contained, you dont actually need to keep the webserver running after its done correctly pointing to all the static files!
```


please forward my best regards to "the client" :)