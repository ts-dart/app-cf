const models = require('../model/database/models');

async function read() {
    const orders = await models.order.findAll({
        include: [
            { model: models.buyer },
            { model: models.provider }
        ]
    });

    return orders.map((order) => {
        return {
            notaFiscal: order.nNf,
            sacado: order.buyer.name,
            cedente: order.provider.name,
            emissao: formatDate(order.emissionDate),
            valor: order.value,
            status: order.orderStatusBuyer,
        }
    });
}

function formatDate(rawData) {
    const arrayData = rawData.split('T')[0].split('-');
    const date = `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
    return date;
}

module.exports = {
    read,
}
