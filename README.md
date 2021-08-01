# node-block-io

## Create a new wallet.
To make the request follow this curl:

```sh
curl --location --request POST 'http://127.0.0.1:8080/BTC/wallet'
```

The response request looks like:

```json
{
  "status": "success",
  "data": {
    "network": "BTCTEST",
    "user_id": 5,
    "address": "2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC",
    "label": "triwa44"
  }
}
```

## Get a list of active wallets.
To make the request follow this curl:

```sh
curl --location --request GET 'http://127.0.0.1:8080/BTC/wallet/addresses'
```

The response request looks like:

```json
{
    "status":"success",
    "data":{
        "network":"BTCTEST",
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
}
```

## Get a balance of a address.
To make the request follow this curl:

```sh
curl --location --request GET 'http://127.0.0.1:8080/BTC/wallet/2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC/balance'
```

The response request looks like:

```json
{"
    status":"success",
    "data":{
        "network":"BTCTEST",
        "available_balance":"0.01701671",
        "pending_received_balance":"0.00000000"
    }
}
```

## Estimate the cost of make a transaction.
To make the request follow this curl:

```sh
curl --location --request POST 'http://127.0.0.1:8080/BTC/wallet/fee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ammount":"0.00001671",
    "destination":"2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC"
}'
```

The response request looks like:

```json
{
    "status":"success",
    "data":{
        "network":"BTCTEST",
        "blockio_fee":"0.00000000",
        "estimated_network_fee":"0.00003090",
        "estimated_tx_size":206,"estimated_min_custom_network_fee":"0.00001030","estimated_max_custom_network_fee":"0.00154500"
    }
}
```

## Transfer money between two wallets.
To make the request follow this curl:

```sh
curl --location --request POST 'http://127.0.0.1:8080/BTC/wallet/transfer' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ammount":"0.00001671",    
    "origin":"2NBXsXdeeoEVsdKQEAtRaRdR6tRbJMNf6g4",
    "destination":"2N9xZAjmVpb8pCjJWUiwVcHtTayhhnwoAZC"
}'
```

The response request looks like:

```json
{
    "status":"success",
    "data":{
        "network":"BTCTEST",
        "txid":"6da926113872e49a10e3028fbb3b6489ef11986fd3b668f13df071c96f651438"
    }
}
```
