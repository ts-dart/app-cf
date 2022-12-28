const NFeService = require('../services/nfeService');

async function read(_req, res) {
    const data = await NFeService.read();
    return res.status(200).json(data);
}

module.exports = {
    read,
}