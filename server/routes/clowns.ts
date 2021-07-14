import express from 'express';
import HttpStatus from 'http-status-codes';

import { Clown } from '../types';
import { clowns, getNextId } from '../stores';

const router = express.Router();

/**
 * Gets a list of clown
 */
router.get('/clowns', function(req, res, next) {
    console.log(`listing ${clowns.length} clowns`);
    res.json(clowns);
});

/**
 * Gets the detail of a particular clown
 */
 router.get('/clown/:id', function(req, res, next) {
    const clownId = Number(req.params.id);
    const clown = clowns.find(c => c.id === clownId);

    if (clown){
        console.log(`/clown/${clownId} found`);
        res.json(clown);
    }
    else {
        console.log(`/clown/${clownId} not found`);
        res.status(HttpStatus.NOT_FOUND);
    }
});


/**
 * Add or update a clown
 */
router.post('/clown/addOrUpdate', function(req, res, next) {
    const clown: Clown = req.body;
    const index = clown.id ? clowns.findIndex(c => c.id === clown.id) : -1

    if (index !== -1) {
        console.log(`Update clown ${clown.id}`);
        clowns.splice(index, 1, clown)
    } else {
        console.log(`Adding new clown ${clown.name}`);
        clown.id = getNextId();
        clowns.push(clown);
    }

    res.status(HttpStatus.OK);
});

export default router;