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

    const {
      customer,
      hotel,
      adress,
      phoneNumber,
      postalCode,
      email,
      created,
      description,
      invoiceNumber,
      isUnderWarranty,
      status,
      technitian,
      rmaId
    } = rma;


    const personalInfo = {
      customer,
      hotel,
      adress,
      phoneNumber,
      postalCode,
      email,
    };
    const rmaInfo = {
      created,
      description,
      invoiceNumber,
      isUnderWarranty,
      status,
      technitian,
    };

    return { rmaId, personalInfo, rmaInfo };
  })();
};
