import express from 'express';
// import { body, validationResult } from 'express-validator';

const route: string = '/list';

const validate = [
    // This section is intentionally left blank
    // TODO: add express-validation rules
];

/**
 * Gets a list of clown
 * @method GET
 */
async function handler(
     request: express.Request,
     response: express.Response,
     next: express.NextFunction)
{
    response.json([]);
}

const router = express.Router();
router.get(route, handler);
export default router;