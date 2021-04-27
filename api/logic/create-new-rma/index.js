const { models: { RMA } } = require('data')

module.exports = function createRMA(rma) {

    const { date, companyName, siteName, rmaId, cif, product, issue, technitian, hasContract, contractType, order, orderDate, issueResolution } = rma

    return (async () => {
        const rma = await RMA.findOne({ rmaId })

        if (rma) throw new Error('create_rma_exception_document_already_exists')

        await RMA.create({ date, companyName, siteName, rmaId, cif, product, issue, technitian, hasContract, contractType, order, orderDate, issueResolution })
    })()
}