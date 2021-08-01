const {
    createWallet,
    getAddresses,
    getWalletBalance,
    getMoneyPrice,
    getNetworkFee,
    transfer
} = require('../lib/blockio/');

/**
 * Get list of address.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getAllAdresses = async (req, res) => {

    try {

        const {
            money
        } = req.params;

        console.log({
            message:'LIST ALL ADDRESS',
            money
        });

        const data = await getAddresses(money);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Get wallet balance
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getBalance = async (req, res) => {

    try {

        const {
            id,
            money
        } = req.params;

        console.log({
            message:'WALLET BALANCE',
            id,
            money
        });

        const data = await getWalletBalance(money,id);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Get money price
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getPrice = async (req, res) => {

    try {

        const {
            money
        } = req.params;

        console.log({
            message:'WALLET COTIZATION',
            money
        });

        const data = await getMoneyPrice(money);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Calculate network fee
 * @param {object} req request object.
 * @param {object} res response object.
 */
const calcNetworkFee = async(req, res) => {

    try {

        const {
            money
        } = req.params;

        const {
            ammount,
            destination
        } = req.body;

        console.log({
            message:'CALCULATE NETWORK FEE',
            money,
            ammount,
            destination
        });

        const data = await getNetworkFee(money,ammount, destination);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Transference between wallets
 * @param {object} req request object.
 * @param {object} res response object.
 */
const transferMoney =async (req, res) => {

    try {

        const {
            money
        } = req.params;

        const {
            ammount,
            origin,
            destination
        } = req.body;

        console.log({
            message:'TRANSER MONEY',
            money,
            ammount,
            origin,
            destination
        });

        const data = await transfer(money,origin,destination,ammount);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Creation of new wallet controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const newWallet = async(req, res) => {

    try {

        const {
            money
        } = req.params;

        console.log({
            message:'CREATE WALLLET',
            money
        });

        const data = await createWallet(money);
        res.status(200).json(data);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

module.exports={
    getAllAdresses,
    getBalance,
    getPrice,
    calcNetworkFee,
    transferMoney,
    newWallet
};