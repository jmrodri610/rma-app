const { Router } = require("express");
const {
  env: { SECRET },
} = process;
const tokenVerifier = require("../../helpers/token-verifier")(SECRET);
const {
  createRMA,
  retrieveListOfRMA,
  retrieveRMA,
  updateRMA,
} = require("../../logic");

const router = Router();

router.get("/retrieve-list", tokenVerifier, async (req, res) => {
  try {
    const rmaList = await retrieveListOfRMA();
    res.status(200).json(rmaList);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/retrieve-rma/:rmaId", tokenVerifier, async (req, res) => {
  const { rmaId } = req.params;
  try {
    const rma = await retrieveRMA(rmaId);
    res.status(200).json(rma);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/create", tokenVerifier, async (req, res) => {
  try {
    await createRMA(req.body);
    res.status(201).end();
  } catch (error) {
    res.status(409).json(error.message);
  }
});

router.post("/update", tokenVerifier, async (req, res) => {
  try {
    await updateRMA(req.body);
    res.status(201).end();
  } catch (error) {
    res.status(409).json(error.message);
  }
});

module.exports = router;
