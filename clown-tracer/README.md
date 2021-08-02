# clown-tracer


- [clown-tracer](#clown-tracer)
  - [About](#about)
  - [Install and Run](#install-and-run)
  - [Dependencies](#dependencies)
  - [Structure](#structure)
  - [Test](#test)
  - [TODO](#todo)


## About

The application provides the profiles of all the clowns in town. This is only a front-end application. The data are stored in static. Before any profile registered, the application provides 10 (can be changed in files) random profile. I got only img. Google clown, you'll know why. 


## Install and Run

clone the repo.
npm install
npm run serve

## Dependencies

The application is created by vue-cli.

1. Vue-cli:
2. Vuetify: vuetify provides us free UI. 

I must say I'm not a fan of vuex. So in this application I didn't use vuex. However normally in real project, I still use need vuex but with my personal design. 

## Structure

-src
&emsp;  |-api
&emsp;  |-components
&emsp;  |-lib
&emsp;  |-static
&emsp;  App.vue
-test    
&emsp;  |-api
&emsp;  |-components
&emsp;  |-lib

I have four components for this application. Navigaton provides the clown name list. CardGallery provides some details of the clown profile. Regsiter provides the client to register the profile of clown. welcome is the first look of the application.

## Test

I don't have enough time to do the test. I was planning to use jest to make the unit test cases.

## TODO

1. The filter feature is not designed very well. 
2. I was planning to do a search on the app bar. At least provide the name search. 
3. Test should be finished.
