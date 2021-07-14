/**
 * These are server api routes for listing, adding, updating clowns.
 * TODO: common between server/client
 * TODO: abstract away the host/port and public_url into environment variables
 */
export const apiRoutes = {
    listClowns: 'http://localhost:8000/gotham/clowns',
    getClown: 'http://localhost:8000/gotham/clown',
    addOrUpdateClown: 'http://localhost:8000/gotham/clown/addOrUpdate'
};
