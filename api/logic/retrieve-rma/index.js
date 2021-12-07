const {
  models: { RMA },
} = require("data");
const {
  validate,
  errors: { ContentError },
} = require("utils");

module.exports = function retrieveRMA(id) {
  validate.string(id, "id");

  return (async () => {
    const rma = await RMA.findById(id).lean();

    if (!rma) throw new ContentError("invalid document");

    rma.id = rma._id;
    delete rma._id;
    delete rma.__v;

    return rma;
  })();
};
