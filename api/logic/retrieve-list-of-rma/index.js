const {
  models: { RMA },
} = require("data");

module.exports = function retrieveListOfRMA() {
  return (async () => {
    const rmaList = await RMA.find().lean();

    if (!rmaList) return [];
    
    rmaList.forEach((rma) => {
        rma.id = rma._id;
        delete rma._id;
        delete rma.__v;
    });
    
    return rmaList;
  })();
};
