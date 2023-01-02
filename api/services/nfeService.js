const models = require('../model/database/models');

async function read() {
    const orders = await models.order.findAll({
        include: [
            { model: models.buyer },
            { model: models.provider }
        ]
    });
    console.log(orders);
    return orders.map((order) => {
        return {
            notaFiscal: order.nNf,
            sacado: order.buyer.name,
            cedente: order.provider.name,
            emissao: formatDate(order.emissionDate),
            valor: formatValue(order.value),
            status: formatStatus(order.orderStatusBuyer),
        }
    });
}

function formatStatus(status) {
    const statusList = ['Pendente de confirmação', 'Pedido confirmado', 
    'Não reconhece o pedido', 'Mercadoria não recebida', 
    'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 
    'Recebida e confirmada', 'Pagamento Autorizado'];

    return statusList[status];
}

function formatValue(value) {
    const formatedValue = (Number(value)).toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    });
    return formatedValue;
}

function formatDate(date) {
    const arrayData = date.split('T')[0].split('-');
    const formatedDate = `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
    return formatedDate;
}

module.exports = {
    read,
}
