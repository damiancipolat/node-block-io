const {
    getClient
} = require('./helper');

const config = require('../../config/');

//Create a new address from
const createWallet = async (money)=>{

    //Get the connector.
    const client = getClient(money);

    //Create the wallet and return the object.
    return await client.get_new_address();

}

//Get list of active walley by money.
const getAddresses = async (money)=>{

    //Get the connector.
    const client = getClient(money);

    //Create the wallet and return the object.
    return await client.get_my_addresses();

}

//Get wallet balance.
const getWalletBalance = async (money, address)=>{

    //Get the connector.
    const client = getClient(money);    

    //Get wallet by address.
    return await client.get_address_balance(address);

}

//Get money price.
const getMoneyPrice = async (money)=>{
  
    //Get the connector.
    const client = getClient(money);    

    //Get wallet by address.
    return await client.get_current_price({ base_price: money });
  
}

//Estimate the cost of make a transaction to a address.
const getNetworkFee = async (money,ammount, destiny)=>{

    //Get the connector.
    const client = getClient(money);

    //Get wallet by address.
    return await client.get_network_fee_estimate({
        amounts: ammount,
        to_addresses: destiny
    });

}

//Envio una transaccion usando block.io
const transfer = async (money,from,to,amount)=>{

    //Get the connector.
    const client = getClient(money);

    //Get the pin.
    const {
        pin
     } = config.blockio;

    //Prepar la transaccion.
    const prepared_transaction = await client.prepare_transaction({
      from_addresses: from,
      to_addresses:to,
      amount
    });

    //Hago la firma de la transaccion.
    const signed_transaction = await client.create_and_sign_transaction({
        data: prepared_transaction,
        pin
    });

    //Hago la transferencia.
    return await client.submit_transaction({
        transaction_data: signed_transaction
    });

}

module.exports = {
    transfer,
    createWallet,
    getAddresses,
    getWalletBalance,
    getMoneyPrice,
    getNetworkFee
};