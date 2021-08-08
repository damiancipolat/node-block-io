const {
    getWalletBalance
} = require('../lib/blockio/');

const BALANCE_PLUS = 0.51698581;
const NETWORK_FEE = 0.00000581;

/**
 * Create new wallet
 * @param {object} req request object.
 * @param {object} res response object.
 */
const newWallet = async(req, res) => {

    try {

        const {
            money
        } = req.params;

        const mock = {
            "status": "success",
            "data": {
              "network": money+"TEST",
              "user_id": 5,
              "address": "2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC",
              "label": "triwa44"
            }
        };

        console.log({
            message:'CREATE NEW WALLET',
            money
        });

        res.status(200).json(mock);

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

        //Cargo el balance.
        const balance = await getWalletBalance(money,id);

        //Change data, and add constant value.
        if (balance.status=='success'&&balance.data&&balance.data.available_balance){
            balance.data.available_balance = (parseFloat(balance.data.available_balance)+BALANCE_PLUS).toString();
        }

        res.status(200).json(balance);

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

        const mock = {
            "status":"success",
            "data":{
                "network":"BTCTEST",
                "blockio_fee":"0.00000000",
                "estimated_network_fee":NETWORK_FEE.toString(),
                "estimated_tx_size":206,
                "estimated_min_custom_network_fee":"0.00001030",
                "estimated_max_custom_network_fee":"0.00154500"
            }
        };

        console.log({
            message:'CALCULATE NETWORK FEE',
            money,
            ammount,
            destination
        });

        res.status(200).json(mock);

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

        const mock = {
            "status":"success",
            "data":{
                "network":`${money}TEST`,
                "txid":"6da926113872e49a10e3028fbb3b6489ef11986fd3b668f13df071c96f651438"
            }
        };

        res.status(200).json(mock);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

module.exports={
    newWallet,
    getBalance,
    calcNetworkFee,
    transferMoney
};