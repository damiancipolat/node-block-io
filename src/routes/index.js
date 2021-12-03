const express = require('express');
const router = express.Router();

const main = require('../controller/main.js');
const mock = require('../controller/mock.js');

//Main routes
router.get('/:money/wallet/addresses',main.getAllAdresses);
router.get('/:money/wallet/:id/balance',main.getBalance);
router.get('/:money/price',main.getPrice);
router.post('/:money/wallet',main.newWallet);
router.post('/:money/wallet/fee',main.calcNetworkFee);
router.post('/:money/wallet/transfer', main.transferMoney);

//Mock routes.
router.get('/mock/:money/wallet/addresses',mock.getAddresses);
router.get('/mock/:money/wallet/:id/balance',mock.getBalance);
router.get('/mock/:money/price',mock.getPrice);
router.post('/mock/:money/wallet',mock.newWallet);
router.post('/mock/:money/wallet/fee',mock.calcNetworkFee);
router.post('/mock/:money/wallet/transfer', mock.transferMoney);

module.exports = router;