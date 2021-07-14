# Gotham's Clown Registry

Welcome to Gotham's clown registry.  This simple app currently has a v

## Requirements

1. [Node 10+](https://nodejs.org/en/)
1. [Yarn 1.17.3+](https://classic.yarnpkg.com/en/)

## How to Run

1. To run the server

    ```bash
    cd server
    yarn install
    yarn start
    ```

1. To run the client

    ```bash
    cd client
    yarn install
    yarn start
    ```

## What I would have added next

Server side:
* Route request validation 
* Error handling
* API test coverage
* Serving client build as static assets of server so they are running from the same port

Client side:
* Login page
* authentication and authorizations
* state separation like redux
* persistent db like mongodb
* Better UI
    * using CSS libraries like bootstrap
    * or use established UI library like MaterialUI
* Test coverage

Build:
* Webpack, bundling, minimization, separate bundles of the various page entry points
* Production build distibution for both the server and client
* Create Dockerfile and build docker image

## Rationale for my choices of external dependencies

Server side:
* ExpressJS
* express-validator
    * I didn't get to this part, but I found the validator really easy to use
    * the rules are easy to read and write
* winston & express-winston
    * didn't get to this either. But logging to file with proper rollover is a must

Client side:
* react-router-dom
    * The default go-to library to build routing 
* axios
    * For establishing connection to the server