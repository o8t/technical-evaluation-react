# Clown Collection #

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts ##

In the project directory, you can run:

### `npm start` ###

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` ###

Launches the test runner in the interactive watch mode.

### `npm run build` ###

Builds the app for production to the `build` folder.

## External Libraries ##

### Material UI ###

There are many excellent React UI component libraries that would be good options
and even going without a UI library would be a valid choice, but Material UI was chosen because:

- It speeds up development of basic UI components with a familiar and attractive design
- It has good documentation and community support so fixing issues or finding examples is usually not difficult
- It was recommended as the top overall UI component library by Retool (https://retool.com/blog/react-component-libraries/)

Despite the drawbacks:

- Introducing a UI library creates greater domain knowledge necessity to read, navigate, and contribute.
- Material UI is arguably so common that it imparts a slightly bland feel when using default styles

### Redux ###

Though Redux is the obvious choice for a state management library for React, it would not be necessary for
an app of this complexity. Nevertheless, it was chose because:

- It has excellent community support
- It tends to make apps more future proof by having solutions waiting for common state management complexities
- It has detailed Typescript support that works fairly well out of the box

Despite the drawbacks:

- Introducing a state management framework, even more than a UI library, increases domain knowledge necessity to
  read, navigate and contribute.
- There are many revisions and different ways of accomplishing the same goal, some with better Typescript
  compatibility than others, so while there is a lot of resources online, not all will lead you down
  the right path.
- For a project of this size, it would arguably be quicker to simply use good state management principles
  rather than pulling in a framework to implement them

## Architecture ##

### Model ###

Basic Redux store is the single source of truth for the app overall with reducers to add / remove clowns as well
as load the store with a pre-built list of clowns.

The Redux store should always contain the currently-needed subset of data saved to storage.

Small bits of state which are not "ready" for storage or the Redux store are also stored with the React view components.

Likewise a bit of state is stored in the URL bar which tells the router which page to display.

### View ###

React views are broken into pages using a router in App.tsx

- Home.tsx which provides basic introduction to the app
- Register.tsx which allows a clown to register with a name and profile photo
- ClownList.tsx which lists all clowns in the store

Views than need data from the store must ensure that data is loaded into the store
by calling for the appropriate load action in clownActions.tsx.

### Controller ###

clownActions.ts contains the primary controller code for this application. It keeps the views simpler by processing inputs
to mutate the state as it is contained in two places: Storage, and the live Redux store.

The general process is to attempt to update storage first since that is slower and less reliable and upon success, update the Redux
store to match. A less performant and less fun (but simpler) approach would be to simply reload required data from the storage
provider after every update so that the Redux store is only updated via the storage data.

### Storage Provider ###

First, there is the interface for the storage provider. This defines the requirements of any storage provider.

The local storage provider simply jams data in JSON format into the browser local storage for two reasons:

1. It makes running / testing the application easier than requiring say, a Google Cloud Storage bucket to back the store.
   This is not only critical for a demo project, but also extremely useful in a production environment. It fulfills the principle
   that each component of a software system should be easy to develop and test apart from any other part of the system. With a
   local storage provider present, any developer can pull down this repo and test with relatively few dependencies and if / when
   bugs occur during integration that do not occur using the local storage provider, those issues are easier to locate.
2. It was somewhat quicker to implement than a full network-backed storage solution
