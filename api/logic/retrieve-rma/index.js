const { models: { RMA } } = require('data');

module.exports = function retrieveRMA() {

    return (async ()=> {

        const rmaList = await RMA.find().lean();

        if (!rmaList) return []

        rmaList.forEach(rma => {
            delete rma._id
            delete rma.__v
        })


        return rmaList
    })()
}