const { Router } = require('express');
const { env: { SECRET } } = process;
const tokenVerifier = require('../../helpers/token-verifier')(SECRET);
const jwt = require('jsonwebtoken')
const { authenticateUser, registerUser, retrieveUser } = require('../../logic')

const router = Router();

router.post('/register', async (req, res)=> {
    const { name, surname, email, username, password } = req.body;
    try {
        await registerUser(name, surname, email, username, password);
        res.status(201).end()
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/authenticate', tokenVerifier, async (req, res)=> {
    const { username, password } = req.body
    try {
        const id = await authenticateUser(username, password)
        const token = jwt.sign({ sub: id }, SECRET, { expiresIn: '1d' })

        res.json( {token} )
    } catch (error) {
        res.status(409).json(error.message)
    }
})
router.get('/retrieve-user', tokenVerifier, async (req, res)=> {
    try {
        const { id } = req;

        const user = await retrieveUser(id)
        res.json(user)
    } catch (error) {
        res.status(409).json(error.message)
    }
})

module.exports = router;