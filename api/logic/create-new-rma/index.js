const {
  models: { RMA },
} = require("data");

module.exports = function createRMA(rma) {
  const {
    technitian,
    hotel,
    customer,
    adress,
    postalCode,
    phoneNumber,
    email,
    isUnderWarranty,
    invoiceNumber,
    purchaseDate,
    description,
    rmaId,
    created
  } = rma;

  return (async () => {
    const rma = await RMA.findOne({ rmaId });

    if (rma) throw new Error("create_rma_exception_document_already_exists");

    await RMA.create({
      technitian,
      hotel,
      customer,
      adress,
      postalCode,
      phoneNumber,
      email,
      isUnderWarranty,
      invoiceNumber,
      purchaseDate,
      description,
      rmaId,
      created
    });
  })();
};
