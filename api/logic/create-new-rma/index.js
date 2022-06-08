const {
  models: { RMA },
} = require("data");

module.exports = function createRMA(rma) {
  const {
    technitian,
    hotel,
    customer,
    address,
    postalCode,
    phoneNumber,
    email,
    isUnderWarranty,
    description,
    rmaId,
    createdDate,
    received = null,
    process = null,
    sent = null,
    solution = null,
  } = rma;

  return (async () => {
    const rma = await RMA.findOne({ rmaId });

    if (rma) throw new Error("create_rma_exception_document_already_exists");

    await RMA.create({
      technitian,
      hotel,
      customer,
      address,
      postalCode,
      phoneNumber,
      email,
      isUnderWarranty,
      description,
      rmaId,
      createdDate,
      received,
      process,
      sent,
      solution,
    });
  })();
};
