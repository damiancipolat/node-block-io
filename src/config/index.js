const config = {
    server: {
        port: process.env.PORT
    },
    blockio:{
        prod:{
            bitcoin:"d1c4-57f8-00e0-0ceb",
            litecoin:"4210-28f1-8086-031a",
            doge:"6b7d-b227-6f77-76d3"
        },
        dev:{
            bitcoin:"445a-3f29-2ac6-1193",
            litecoin:"81ae-7b52-0529-5eb2",
            doge:"b5a7-8ef5-79da-85c7"
        },
        pin: process.env.BLOCKIO_PIN
    }
};

module.exports = {
    ...config
};
