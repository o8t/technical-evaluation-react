import express from 'express';
import HttpStatus from 'http-status-codes';
import env from '../environment';

// Routes
import list from './clowns';
import healthcheck from './healthcheck';

// configure commonly used server routes
const router = express.Router();

router.use(env.PUBLIC_URL, list);

// Routes for checking health. Requests come from Docker or AWS target group.
router.use(env.PUBLIC_URL, healthcheck);

// Fallback catch-all
router.get('*', function (req, res, next) {
    res.sendStatus(HttpStatus.NOT_FOUND);
});

export default router;