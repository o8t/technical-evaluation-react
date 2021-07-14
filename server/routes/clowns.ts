import express from 'express';
import HttpStatus from 'http-status-codes';
import { body, validationResult } from 'express-validator';

import { Clown } from '../types';
import { clowns } from '../stores';

const router = express.Router();

/**
 * Gets a list of clown
 */
router.get('/clowns', function(req, res, next) {
    res.json(clowns);
});

/**
 * Add a clown
 */
router.post('/clowns/add', function(req, res, next) {
    const clown: Clown = req.body;
    const index = clown.id ? clowns.findIndex(c => c.id === clown.id) : -1

    if (index !== -1) {
        clowns.splice(index, 1, clown)
    } else {
        clowns.push(clown);
    }

    res.status(HttpStatus.OK);
});

export default router;