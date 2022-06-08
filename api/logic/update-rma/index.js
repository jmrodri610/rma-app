const {
  models: { RMA },
  ObjectId,
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

    if (!rma) throw new Error("update_rma_exception_document_does_not_exists");

    const updateDocument = {
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
    };
    await RMA.updateOne({ _id: ObjectId(rma.id) }, { $set: updateDocument });
  })();
};
