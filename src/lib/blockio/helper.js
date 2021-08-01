const BlockIo = require('block_io');
const config = require('../../config/');

//Extract the keys from the config.
const getKey = (money)=>{

    //Get process node env.
    const env = process.env.NODE_ENV;

    //Extract from config.
    const blockio = config.blockio;

    //Extract the keys.
    switch(env){
        case "dev":
            return blockio.dev
        case "develop":
            return blockio.dev;
        case "prod":
            return blockio.prod
        case "production":
            return blockio.prod;            
    }

    return null;
}

//Extract the keys by money code
const keyByMoney = (code,keys)=>{

    //Change to uppercase.
    code = code.toUpperCase();

    switch(code){
        case "BTC":
            return keys.bitcoin;
        case "LTC":
            return keys.litecoin;
        case "DOG":
            return keys.doge;
    }

    return null;

}

//Get the connector.
const getClient = (money)=>{

    //Get the keys from the environment.
    const keyEnv = getKey(money);

    if (!keyEnv)
        throw new Error("Unable to extract keys, set NODE_ENV=production|develop");

    //Extract the heyks by the money.
    const key = keyByMoney(money,keyEnv);

    //Use block.io sdk.
    return new BlockIo(key);

}

module.exports = {
    getKey,
    keyByMoney,
    getClient
};