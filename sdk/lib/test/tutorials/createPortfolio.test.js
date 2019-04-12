"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the LUSID SDK and libraries
var api_1 = require("../../api");
var client_1 = require("../../client/client");
var uuid4 = require('uuid/v4');
var client = new client_1.Client([client_1.Source.Secrets, 'tokenUrl'], [client_1.Source.Secrets, 'username'], [client_1.Source.Secrets, 'password'], [client_1.Source.Secrets, 'clientId'], [client_1.Source.Secrets, 'clientSecret'], [client_1.Source.Secrets, 'apiUrl']);
function createTransactionPortfolio(scope, createRequest) {
    return new Promise(function (resolve, reject) {
        client.api.transactionPortfolios.createPortfolio(scope, createRequest)
            .then(function (res) { return resolve(res.body); })
            .catch(function (err) { return reject(err); });
    });
}
var createRequest = new api_1.CreateTransactionPortfolioRequest();
createRequest.displayName = "UK Equities";
createRequest.code = "UKEQTY";
createRequest.baseCurrency = "GBP";
createTransactionPortfolio(uuid4(), createRequest)
    .then(function (portfolio) { return console.log(portfolio); })
    .catch(function (err) { return console.log(err); });
