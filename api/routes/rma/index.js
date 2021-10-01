const { Router } = require('express');
const { env: { SECRET } } = process;
const tokenVerifier = require('../../helpers/token-verifier')(SECRET);
const { createRMA, retrieveRMA } = require('../../logic')

const router = Router();

router.get('/retrieve', tokenVerifier, async (req, res)=> {
    try {
        const rmaList = await retrieveRMA();
        res.status(200).json(rmaList)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/create', tokenVerifier, async (req, res)=> {
    try {
        await createRMA(req.body)
        res.status(201).end()
    } catch (error) {
        res.status(409).json(error.message)
    }
})

module.exports = router;