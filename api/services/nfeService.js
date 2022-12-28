const models = require('../model/database/models');

async function read() {
    const orders = await models.order.findAll({
        include: [
            { model: models.buyer },
            { model: models.provider }
        ]
    });
    return orders;
}

module.exports = {
    read,
}
