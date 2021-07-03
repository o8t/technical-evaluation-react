# Clown Portal

## Summary

Add and delete clowns, allowing entry of some personal details.
LocalStorage is used for data persistence.
I used the ng5-slider plugin to allow clowns to set the craziness level. This makes for a richer user interface and the features provided by this plugin are not there in framework I am using.
As a starter, I used this free template. (https://demos.creative-tim.com/material-dashboard-angular2/#/dashboard).

## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)

## Demo

A demo is running in a AWS t2 medium instance here:
http://http://52.201.248.84/

## Quick start

Quick start options:

- [Download from Github](git remote add origin https://github.com/barefoothiker/clownPortalFrontEnd.git).
# Run using node/npm
- Install node and npm using nvm (nvm install 14). To install nvm
https://github.com/nvm-sh/nvm
- Run the following
nvm install 14
npm install
npm start
# Run using docker
- [Build using docker]( docker build -t "build_d:dev"  .).
- [Run using docker] (docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm build_d:dev)
