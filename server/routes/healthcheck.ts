import express from 'express';

const router = express.Router();

/**
 * This was meant to be a healthcheck when I get to docker container
 */
router.get('/', function (req, res, next) {
    res.send('Gotham clown server is live!');
});

export default router;