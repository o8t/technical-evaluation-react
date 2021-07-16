# Clown Tracker 5000

### How to run
#### `run_app.sh <port_number>`

Builds a docker image and spins up a container which runs the application in development mode. Include a port number if you wish to run the app on a port other than the default, 3000.

### External Dependency

The primary external dependency I chose to include in this project is the React component library, Material-UI. I used Material-UI because it provides a set of common UI elements most web applications have, as well as simple control over the responsiveness of elements on the page.

For most web applications, in my experience some kind of UI component library is good to choose and stick with for consistency of look and feel. I chose Material-UI given my prior experience using it, but if given more time would evaluate the latest libraries available against application requirements.

Most UI libraries provide a grid system for managing responsiveness, however I find that Material-UI has one of the better grid systems. This was also a consideration, given the gallery like record of clowns within the app.
