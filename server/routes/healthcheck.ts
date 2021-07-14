import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Gotham clown server is live!');
});

export default router;