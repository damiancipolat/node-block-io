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
 * Get all addresses
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getAddresses = async (req, res) => {

    try {

        const {
            money
        } = req.params;

        const mock = {
            "status":"success",
            "data":{
                "network":money+"TEST",
                "addresses":[
                    {
                        "user_id":0,"address":"2My49qeMQ3M2E46C3vsT6pVzFCRmrvBLRT6","label":"default","pending_received_balance":"0.00000000","available_balance":"0.00000000","is_segwit":true
                    },
                    {
                        "user_id":1,"address":"2NELocD3CnoKA4BtdpEBYboUjLxtnFxrpD5","label":"thiry87","pending_received_balance":"0.00000000","available_balance":"0.00000000","is_segwit":true
                    },
                    {
                        "user_id":2,"address":"2NBbkWNmuHWGTKUCrtLsgknnS1o3KLiH7kH","label":"rywy65","pending_received_balance":"0.00000000","available_balance":"0.01551671","is_segwit":true
                    },
                    {
                        "user_id":3,"address":"2NBXsXdeeoEVsdKQEAtRaRdR6tRbJMNf6g4","label":"rdynto54","pending_received_balance":"0.00000000","available_balance":"0.00100000","is_segwit":true
                    },
                    {
                        "user_id":4,"address":"2N4nnSnP9gb1rgnPqahq8t4p97RjCXk8tQT","label":"chida61","pending_received_balance":"0.00000000","available_balance":"0.00050000","is_segwit":true
                    },
                    {
                        "user_id":5,"address":"2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC","label":"triwa44","pending_received_balance":"0.00000000","available_balance":"0.00000000","is_segwit":true
                    }
                ],
                "page":1,
                "has_more":false
            }
        };

        console.log({
            message:'Get addresses',
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

        const balance={
            "status":"success",
            "data":{
                "network": money+"TEST",
                "available_balance":"0.01701671",
                "pending_received_balance":"0.00000000"
            }
        };

        res.status(200).json(balance);

    } catch(error){
        console.error({message:'Controller error',error});
        res.status(500).json(error);
    }

}

/**
 * Get price
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getPrice = async (req, res) => {

    try {

        const {
            money
        } = req.params;

        console.log({
            message:'WALLET BALANCE',
            id,
            money
        });

        const price={
          "status": "success",
          "data": {
            "network": money+"TEST",
            "prices": [
              {
                "price": "188.2",
                "price_base": "UST",
                "exchange": "bitfinex",
                "time": 1638561921
              },
              {
                "price": "185.38",
                "price_base": "USD",
                "exchange": "coinbase",
                "time": 1638563441
              },
              {
                "price": "185.91",
                "price_base": "USD",
                "exchange": "bitstamp",
                "time": 1638563442
              },
              {
                "price": "165.27",
                "price_base": "EUR",
                "exchange": "bitstamp",
                "time": 1638563442
              },
              {
                "price": "268.0",
                "price_base": "AUD",
                "exchange": "coinspot",
                "time": 1638563444
              },
              {
                "price": "186.42",
                "price_base": "USD",
                "exchange": "gemini",
                "time": 1638563447
              },
              {
                "price": "0.0035",
                "price_base": "BTC",
                "exchange": "gemini",
                "time": 1638563447
              },
              {
                "price": "0.0445",
                "price_base": "ETH",
                "exchange": "gemini",
                "time": 1638563448
              },
              {
                "price": "0.3437",
                "price_base": "BCH",
                "exchange": "gemini",
                "time": 1638563448
              },
              {
                "price": "185.39",
                "price_base": "USD",
                "exchange": "bitfinex",
                "time": 1638562983
              },
              {
                "price": "0.0034585",
                "price_base": "BTC",
                "exchange": "bitfinex",
                "time": 1638562984
              }
            ]
          }
        };

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
    getAddresses,
    getPrice,
    newWallet,
    getBalance,
    calcNetworkFee,
    transferMoney
};