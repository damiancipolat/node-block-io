const express = require('express');
const router = express.Router();

const {
    transferMoney,
    newWallet,
    getAllAdresses,
    getBalance,
    getPrice,
    calcNetworkFee
} = require('../controller');

//Routes
router.get('/:money/wallet/addresses',getAllAdresses);
router.get('/:money/wallet/:id/balance',getBalance);
router.get('/:money/price',getPrice);
router.post('/:money/wallet',newWallet);
router.post('/:money/wallet/fee',calcNetworkFee);
router.post('/:money/wallet/transfer', transferMoney);

module.exports = router;